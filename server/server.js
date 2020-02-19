const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const db = require('./vhv-query')
const cors = require('cors')

app.use(cors())

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/', (request, response) => {
    response.json({
        info: 'Node.js, Express, and Postgres API'
    })
})

app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.get('/auth_users', db.getAuthUsers)
app.get('/auth_users/:id', db.getAuthUserById)
app.get('/auth/logout', db.logout)

app.post('/users', db.createUser)
app.post('/auth_users', db.createAuthUser)
app.post('/auth/register', db.register)
app.post('/auth/login', db.login)

app.put('/users/:id', db.updateUser)
app.put('/auth_users/:id', db.updateAuthUser)

app.delete('/users/:id', db.deleteUser)
app.delete('/users/', db.deleteAllUser)
app.delete('/auth_users/:id', db.deleteAuthUser)
app.delete('/auth_users/', db.deleteAllAuthUser)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})
