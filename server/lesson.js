const Pool = require('pg').Pool
const pool = new Pool({
    host: 'postgres',
    port: 5432,
    user: 'postgres',
    password: 'password',
    database: 'lessons',
})

const getTongue = (request, response) => {
    pool.query('SELECT * FROM tongue', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

module.exports = {
    getTongue
}