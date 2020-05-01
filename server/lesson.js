const Pool = require('pg').Pool
const pool = new Pool({
    host: 'postgres',
    port: 5432,
    user: 'postgres',
    password: 'password',
    database: 'lessons',
})

const getLip = (request, response) => {
    pool.query('SELECT * FROM lip', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}
const getTongue = (request, response) => {
    pool.query('SELECT * FROM tongue', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}
const getGum = (request, response) => {
    pool.query('SELECT * FROM gum', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}
const getSaliva = (request, response) => {
    pool.query('SELECT * FROM saliva', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}
const getTeeth = (request, response) => {
    pool.query('SELECT * FROM teeth', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}
const getDenture = (request, response) => {
    pool.query('SELECT * FROM denture', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}
const getCleanliness = (request, response) => {
    pool.query('SELECT * FROM cleanliness', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}
const getPain = (request, response) => {
    pool.query('SELECT * FROM pain', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

module.exports = {
    getLip,
    getTongue,
    getGum,
    getSaliva,
    getTeeth,
    getDenture,
    getCleanliness,
    getPain,
}