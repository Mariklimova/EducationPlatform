const pool = require('../db');

async function createDataDB(name, surname, email, pwd) {
    const client = await pool.connect()

    const sql = 'INSERT Into users (name, surname, email, pwd) Values ($1,$2,$3,$4) returning *'
    const { rows } = await client.query(sql, [name, surname, email, pwd]);
    return rows
}


module.exports = { createDataDB }