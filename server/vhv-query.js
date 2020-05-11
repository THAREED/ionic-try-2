const jwt = require('jsonwebtoken');
const SECRET_KEY = "secretkey5432";
const Pool = require('pg').Pool
const pool = new Pool({
    host: 'postgres',
    port: 5432,
    user: 'postgres',
    password: 'password',
    database: 'vhv',
})

function isEmpty(obj) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

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
        gender
    } = request.body

    pool.query('INSERT INTO user_lists (firstname, lastname, gender) VALUES ($1, $2, $3)', [firstname, lastname, gender], (error, results) => {
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
        gender
    } = request.body

    pool.query(
        'UPDATE user_lists SET firstname = $1, lastname = $2 , gender = $3 WHERE id = $4',
        [firstname, lastname, gender, id],
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
    console.log("get auth user")
    pool.query('SELECT * FROM auth_users ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getAuthUserById = (request, response) => {
    console.log("get auth user by id")
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM auth_users WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getAuthUsersById1 = (request, response) => {
    if (request.headers && request.headers.authorization) {
        var authorization = request.headers.authorization.split(' ')[1],
            decoded;
        try {
            decoded = jwt.verify(authorization, SECRET_KEY);
        } catch (e) {
            return response.status(401).send('unauthorized');
        }
        var userId = decoded.id;
        
        pool.query('SELECT * FROM auth_users WHERE id = $1', [userId], (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).json(results.rows)
        })
    } else {
        return response.send(500);
    }
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

    pool.query('UPDATE auth_users SET username = $1, password = $2 WHERE id = $3', [username, password, id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`User modified with ID: ${id}`)
    })
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

const logout = (request, response) => {
    response.status(200).send({
        auth: false,
        token: null
    });
}

const register = (request, response) => {
    const {
        firstname,
        lastname,
        career,
        gender,
        phone,
        username,
        password
    } = request.body
    pool.query('SELECT * FROM auth_users WHERE username = $1', [username], (error, user) => {
        if (error) {
            throw error
        }
        if (isEmpty(user.rows)) {
            const expiresIn = 24 * 60 * 60;
            const accessToken = jwt.sign({
                id: user.id
            }, SECRET_KEY, {
                expiresIn: expiresIn
            });
            pool.query('INSERT INTO auth_users (firstname, lastname, career, gender, phone, username, password) VALUES ($1, $2, $3, $4, $5, $6, $7)', [firstname, lastname, career, gender, phone, username, password], (error, results) => {
                if (error) {
                    throw error
                } else {
                    pool.query('INSERT INTO user_progression (user_id, less_1_prog, less_2_prog, less_3_prog, less_4_prog, less_5_prog, less_6_prog, less_7_prog, less_8_prog, case_1_num, case_2_num, case_3_num, case_4_num, case_5_num, case_6_num, case_7_num, case_8_num) VALUES ((SELECT id FROM auth_users WHERE username=$1), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0 ,0 ,0 ,0, 0, 0)', [username], (error, results) => {
                        if (error) {
                            throw error
                        }
                    })
                    pool.query('INSERT INTO user_exercise_score (user_id, lip_score, tongue_score, gum_score, saliva_score, teeth_score, denture_score, cleanliness_score, pain_score ) VALUES ((SELECT id FROM auth_users WHERE username=$1), 0, 0, 0, 0, 0, 0, 0, 0)', [username], (error, results) => {
                        if (error) {
                            throw error
                        }
                    })
                    response.status(200).send({
                        "user": user,
                        "access_token": accessToken,
                        "expires_in": expiresIn
                    });
                    console.log('Registered',accessToken)
                }
            })

        }
    })
}

const login = (request, response) => {
    const {
        username,
        password
    } = request.body
    console.log('Incoming login');
    console.log('username: ' + username);
    console.log('password: ' + password);
    pool.query('SELECT * FROM auth_users WHERE username = $1', [username], (error, user) => {
        if (error) {
            throw error
        }
        if (isEmpty(user.rows)) return response.status(404).send('User not found!');
        var result = false;
        if (password == user.rows[0].password) {
            result = true;
        } else return response.status(401).send('Password not valid!');
        const expiresIn = 24 * 60 * 60
        const accessToken = jwt.sign({
            id: user.rows[0].id
        }, SECRET_KEY);
        response.status(200).send({
            "access_token": accessToken,
            "expires_in": expiresIn
        });
    })
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    deleteAllUser,

    getAuthUsers,
    getAuthUserById,
    getAuthUsersById1,
    createAuthUser,
    updateAuthUser,
    deleteAuthUser,
    deleteAllAuthUser,

    register,
    login,
    logout,
}