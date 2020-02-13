from selenium import webdriver
import requests
import time
import psycopg2
import sys

url = "http://www.thaiphc.net/phc/phcadmin/administrator/Report/OSMRP00013.php"

options = webdriver.FirefoxOptions()
options.add_argument('--ignore-certificate-errors')

driver = webdriver.Firefox(firefox_options=options)
driver.get(url)
provinceid = driver.find_element_by_name('provinceid')
prov_options = [x for x in provinceid.find_elements_by_tag_name("option")]

prov_list = []
for element in prov_options:
    prov_list.append(element.get_attribute("value"))

driver.find_element_by_name('provinceid').click()
driver.find_element_by_xpath("//select/option[@value='" + prov_list[61] + "']").click()
driver.find_element_by_name('search').click()
time.sleep(7)

maintable = driver.find_element_by_class_name("maintable")
items = [x for x in maintable.find_elements_by_tag_name("tr")]
items_len = len(items)

data_list = []
for a in items:
    data_list.append(a.text.split())

try:
    connection = psycopg2.connect(
        user="postgres",
        password="password",
        host="localhost",
        port="5500",
        database="vhv"
    )
    cursor = connection.cursor()
    postgres_insert_query = """INSERT INTO users (firstname, lastname, sex) VALUES (%s, %s, %s)"""
    for item in data_list[1:]:
        record_to_insert = (
            str(item).split(",")[1].replace("'", '').strip(),
            str(item).split(",")[2].replace("'", '').strip(),
            str(item).split(",")[3].replace("'", '').strip(),
        )
        cursor.execute(postgres_insert_query, record_to_insert)
        connection.commit()
        count = cursor.rowcount

    print(count, "Record inserted successfully into users table")

except (Exception, psycopg2.Error) as error:
    if(connection):
        print("Failed to insert record into users table", error)

finally:
    # closing database connection.
    if(connection):
        cursor.close()
        connection.close()
        print("PostgreSQL connection is closed")
        sys.exit()
