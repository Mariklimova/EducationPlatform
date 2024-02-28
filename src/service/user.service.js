
const { createDataDB, getAllUserDB,getAllUserByIdDB, } = require('../repository/user.repository');

async function createData(name, surname, email, pwd) {
    const data = await createDataDB(name, surname, email, pwd)
    if (!data.length) throw new Error('data do not create')
    return data
}

async function getAllUser() {
    const data = await getAllUserDB()
    if (!data.length) throw new Error('database is empty')
    return data
}

async function getAllUser() {
    const data = await getAllUserDB()
    if (!data.length) throw new Error('database is empty')
    return data
}

async function getAllUserById(id) {
    const data = await getAllUserByIdDB(id)
    if (!data.length) throw new Error('')
    return data
}

async function getAllUserById(id) {
    const data = await getAllUserByIdDB(id)
    if (!data.length) throw new Error('')
    return data
}







module.exports = { createData, getAllUser,getAllUserById }