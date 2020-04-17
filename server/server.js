const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const vhv = require('./vhv-query')
const lesson = require('./lesson')
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

app.get('/users', vhv.getUsers)
app.get('/users/:id', vhv.getUserById)
app.get('/auth_users', vhv.getAuthUsers)
app.get('/auth_users/:id', vhv.getAuthUserById)
app.get('/auth/logout', vhv.logout)

app.post('/users', vhv.createUser)
app.post('/auth_users', vhv.createAuthUser)
app.post('/auth/register', vhv.register)
app.post('/auth/login', vhv.login)

app.put('/users/:id', vhv.updateUser)
app.put('/auth_users/:id', vhv.updateAuthUser)

app.delete('/users/:id', vhv.deleteUser)
app.delete('/users/', vhv.deleteAllUser)
app.delete('/auth_users/:id', vhv.deleteAuthUser)
app.delete('/auth_users/', vhv.deleteAllAuthUser)

app.get('/lip/', lesson.getLip)
app.get('/tongue/', lesson.getTongue)
app.get('/gum/', lesson.getGum)
app.get('/saliva/', lesson.getSaliva)
app.get('/teeth/', lesson.getTeeth)
app.get('/denture/', lesson.getDenture)
app.get('/cleanliness/', lesson.getCleanliness)
app.get('/pain/', lesson.getPain)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})
