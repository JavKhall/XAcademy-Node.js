const express = require('express')
const { userController } = require('../controller')

const router = express.Router()

router.post('/', userController.createUser)

router.get('/', userController.getUsers)

router.get('/:id', userController.getUser)

router.put('/:id', userController.upDateUser)

router.delete('/:id', userController.deleteUser)

module.exports = router
