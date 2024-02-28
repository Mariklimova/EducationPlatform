const express = require('express');
const {createData,getAllUser,getAllUserById,updateUser,deleteUser,partUpdateUser} = require('../service/user.service')
const route = express.Router();

route.post('/', async (req, res) => {
    try {
        const { name, surname, email, pwd } = req.body;
        const data = await createData(name, surname, email, pwd)
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send(error.message)
    }
})

route.get('/', async (req, res) => {
    try {
        const data = await getAllUser()
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send(error.message)
    }
})

route.get('/:id', async (req, res) => {
    try {
        const{id} = req.params;
        const data = await getAllUserById(id)
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send(error.message)
    }
})

route.put('/:id', async (req, res) => {
    try {
        const{id} = req.params;
        const { name, surname, email, pwd } = req.body;
        const data = await updateUser(id, name, surname, email, pwd )
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send(error.message)
    }
})

route.delete('/:id', async (req, res) => {
    try {
        const{id} = req.params;
        const data = await deleteUser(id)
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send(error.message)
    }
})

route.patch('/:id', async (req, res) => {
    try {
        const{id} = req.params;
        const body = req.body;
        const data = await partUpdateUser(id,body)
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send(error.message)
    }
})

module.exports = route