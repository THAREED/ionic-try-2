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

const getHistory = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM user_exp_history WHERE user_id = $1 ORDER BY date DESC LIMIT 5', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).json(results.rows)
    })
}

const updateHistory = (request, response) => {
    const id = parseInt(request.params.id)
    const {
        exp,
        level
    } = request.body

    pool.query(
        'INSERT INTO user_exp_history (user_id, exam_exp, level, date) VALUES ($1, $2, $3, now())',
        [id, exp, level],
        (error, results) => {
            if (error) {
                throw error
            }
        }
    )
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

const updateCaseProg = (request, response) => {
    const id = parseInt(request.params.id)
    const case_num = request.params.case_num
    const {
        progress
    } = request.body

    pool.query(
        `UPDATE user_progression SET ${case_num} = $1 WHERE user_id = $2`,
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

const updateExam1Prog = (request, response) => {
    const id = parseInt(request.params.id)
    const {
        prog
    } = request.body

    pool.query(
        `UPDATE user_progression SET exam1_prog = $1 WHERE user_id = $2`,
        [prog, id],
        (error, results) => {
            if (error) {
                throw error
            }
        }
    )
}

const updateExam2Prog = (request, response) => {
    const id = parseInt(request.params.id)
    const {
        prog
    } = request.body

    pool.query(
        `UPDATE user_progression SET exam2_prog = $1 WHERE user_id = $2`,
        [prog, id],
        (error, results) => {
            if (error) {
                throw error
            }
        }
    )
}

const updateExam3Prog = (request, response) => {
    const id = parseInt(request.params.id)
    const {
        prog
    } = request.body

    pool.query(
        `UPDATE user_progression SET exam3_prog = $1 WHERE user_id = $2`,
        [prog, id],
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
    insertCase,
    updateCaseProg,
    updateExam1Prog,
    updateExam2Prog,
    updateExam3Prog,
    getHistory,
    updateHistory
}