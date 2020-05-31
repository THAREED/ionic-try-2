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

const getExam = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM exam_detail WHERE user_id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const updateLessProg = (request, response) => {
    const id = parseInt(request.params.id)
    const less_num = request.params.less_num
    const {
        progress
    } = request.body

    pool.query(
        `UPDATE user_progression SET ${less_num} = $1 WHERE user_id = $2`,
        [progress, id],
        (error, results) => {
            if (error) {
                throw error
            }
        }
    )
}

const updateExp = (request, response) => {
    const id = parseInt(request.params.id)
    const {
        exp
    } = request.body

    pool.query(
        `UPDATE user_progression SET user_exp = $1 WHERE user_id = $2`,
        [exp, id],
        (error, results) => {
            if (error) {
                throw error
            }
        }
    )
}

const insertCase = (request, response) => {
    const id = parseInt(request.params.id)
    pool.query('INSERT INTO exam_detail (user_id, case_number) VALUES ((SELECT id FROM auth_users WHERE user_id=$1), 0)', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}


module.exports = {
    getProg,
    updateLessProg,
    getExam,
    updateExp,
    insertCase
}