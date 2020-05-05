const Pool = require('pg').Pool
const pool = new Pool({
    host: 'postgres',
    port: 5432,
    user: 'postgres',
    password: 'password',
    database: 'vhv',
})

const getProg = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM user_progression WHERE user_id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const updateLessProg = (request, response) => {
    const id = parseInt(request.params.id)
    const {
        firstname,
        lastname,
        gender
    } = request.body

    pool.query(
        `UPDATE user_progression SET gender = $3 WHERE user_id = $4`,
        [firstname, lastname, gender, id],
        (error, results) => {
            if (error) {
                throw error
            }
        }
    )
}


module.exports = {
    getProg
}