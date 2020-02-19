const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const SECRET_KEY = "secretkey5432";
const app = express()
const router = express.Router();
const port = 3000
const Pool = require('pg').Pool
const pool = new Pool({
    host: 'localhost',
    port: 5500,
    user: 'postgres',
    password: 'password',
    database: 'vhv',
})
app.use(cors())

const getUsers = (request, response) => {
    pool.query('SELECT * FROM user_lists ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getUserById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM user_lists WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const createUser = (request, response) => {
    const {
        firstname,
        lastname,
        sex
    } = request.body

    pool.query('INSERT INTO user_lists (firstname, lastname, sex) VALUES ($1, $2, $3)', [firstname, lastname, sex], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`User added with ID: ${results.insertId}`)
    })
}

const updateUser = (request, response) => {
    const id = parseInt(request.params.id)
    const {
        firstname,
        lastname,
        sex
    } = request.body

    pool.query(
        'UPDATE user_lists SET firstname = $1, lastname = $2 , sex = $3 WHERE id = $4',
        [firstname, lastname, sex, id],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`User modified with ID: ${id}`)
        }
    )
}

const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM user_lists WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`User deleted with ID: ${id}`)
    })
}

const deleteAllUser = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('TRUNCATE TABLE user_lists RESTART IDENTITY', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`Users has been truncate`)
    })
}

/////////////////////////////AUTH_USER/////////////////////////////

const getAuthUsers = (request, response) => {
    pool.query('SELECT * FROM auth_users ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getAuthUserById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM auth_users WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const createAuthUser = (request, response) => {
    const {
        username,
        password
    } = request.body

    pool.query('INSERT INTO auth_users (username, password) VALUES ($1, $2)', [username, password], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`User added with ID: ${results.insertId}`)
    })
}

const updateAuthUser = (request, response) => {
    const id = parseInt(request.params.id)
    const {
        username,
        password
    } = request.body

    pool.query('UPDATE auth_users SET username = $1, password = $2 WHERE id = $3',[username, password, id],(error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`User modified with ID: ${id}`)
        }
    )
}

const deleteAuthUser = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM auth_users WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`User deleted with ID: ${id}`)
    })
}

const deleteAllAuthUser = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('TRUNCATE TABLE auth_users RESTART IDENTITY', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`Users has been truncate`)
    })
}

function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

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

app.get('/auth/logout', (request, response) => {
    res.status(200).send({ auth: false, token: null });
});

app.post('/auth/register', (request, response) => {
    const  username  =  req.body.username;
    console.log(req.body);
    const  password  =  bcrypt.hashSync(req.body.password);

    createUser([username, password], (err)=>{
        if(err) return  res.status(500).send("Server error!");
        findUserByEmail(email, (err, user)=>{
            if (err) return  res.status(500).send('Server error!');  
            const  expiresIn  =  24  *  60  *  60;
            const  accessToken  =  jwt.sign({ id:  user.id }, SECRET_KEY, {
                expiresIn:  expiresIn
            });
            res.status(200).send({ "user":  user, "access_token":  accessToken, "expires_in":  expiresIn          
            });
        });
    });
});

app.post('/auth/login', (request, response) => {
    const {
        username,
        password
    } = request.body
    console.log('Incoming login');
    console.log('username: ' + username);
    console.log('password: ' + password);
    pool.query('SELECT * FROM auth_users WHERE username = $1',  [username], (error, user) => {
        if (error) {
            throw error
        }
        if (isEmpty(user.rows)) {
            return response.status(404).send('User not found!');
        }
        var result = false;
        if(password == user.rows[0].password){
            result = true;
        }
        else return  response.status(401).send('Password not valid!');
        const  expiresIn  =  24  *  60  *  60
        const  accessToken  =  jwt.sign({ id:  user.rows[0].id }, SECRET_KEY);
        response.status(200).send({ "access_token":  accessToken, "expires_in":  expiresIn});
    })
});


app.get('/users', getUsers)
app.get('/users/:id', getUserById)
app.get('/auth_users', getAuthUsers)
app.get('/auth_users/:id', getAuthUserById)

app.post('/users', createUser)
app.post('/auth_users', createAuthUser)

app.put('/users/:id', updateUser)
app.put('/auth_users/:id', updateAuthUser)

app.delete('/users/:id', deleteUser)
app.delete('/users/', deleteAllUser)
app.delete('/auth_users/:id', deleteAuthUser)
app.delete('/auth_users/', deleteAllAuthUser)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})