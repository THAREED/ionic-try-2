const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const vhv = require('./vhv-query')
const lesson = require('./lesson')
const vhv_progress = require('./vhv-progress')
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

app.get('/lesson/lip/', lesson.getLip)
app.get('/lesson/tongue/', lesson.getTongue)
app.get('/lesson/gum/', lesson.getGum)
app.get('/lesson/saliva/', lesson.getSaliva)
app.get('/lesson/teeth/', lesson.getTeeth)
app.get('/lesson/denture/', lesson.getDenture)
app.get('/lesson/cleanliness/', lesson.getCleanliness)
app.get('/lesson/pain/', lesson.getPain)

app.get('/progress/:id', vhv_progress.getProg)
app.put('/progress/:id/:less_num', vhv_progress.updateLessProg)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})
