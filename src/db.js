const { Pool } = require('pg')

const pool = new Pool({
    host: 'localhost',
    port: '5432',
    password: 'Murka220183',
    user: 'postgres',
    database: 'EducationPlatform'
})

module.exports = pool