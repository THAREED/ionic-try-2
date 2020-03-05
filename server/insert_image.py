#!/usr/bin/python
import psycopg2


def write_blob(path_to_file, file_extension):
    """ insert a BLOB into a table """
    try:
        # read data from a picture
        drawing = open(path_to_file, 'rb').read()
        # connect to the PostgresQL database
        connection = psycopg2.connect(
            user="postgres",
            password="password",
            host="localhost",
            port="5500",
            database="lessons"
        )
        # create a new cursor object
        cursor = connection.cursor()
        # execute the INSERT statement
        cursor.execute("INSERT INTO imgs (file_extension,img_data) VALUES(%s,%s)",
                       (file_extension, psycopg2.Binary(drawing)))
        # commit the changes to the database
        connection.commit()
        # close the communication with the PostgresQL database
        cursor.close()
    except (Exception, psycopg2.DatabaseError) as error:
        print(error)
    finally:
        if connection is not None:
            connection.close()


def read_blob(id, path_to_dir):
    """ read BLOB data from a table """
    try:
        connection = psycopg2.connect(
            user="postgres",
            password="password",
            host="localhost",
            port="5500",
            database="lessons"
        )
        # create a new cursor object
        cursor = connection.cursor()
        # execute the SELECT statement
        cursor.execute(""" SELECT img_data FROM imgs WHERE img_id = %s """,
                       (id))
        blob = cursor.fetchone()
        # print(blob[0])
        open(path_to_dir + blob[0] , 'wb').write(blob[1])
        # close the communication with the PostgresQL database
        cursor.close()
    except (Exception, psycopg2.DatabaseError) as error:
        print(error)
    finally:
        if connection is not None:
            connection.close()


if __name__ == '__main__':
    # write_blob('../src/assets/testimg/first.jpg', 'jpg')
    read_blob('1', "/server")
