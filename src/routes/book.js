const express = require('express')
const { bookController } = require('../controller')
const { authMiddleware } = require('../middlewares')

const router = express.Router()

router.post('/', authMiddleware.userIsAdmin, authMiddleware.jwtValidate, bookController.createBook)

router.get('/', bookController.getBooks)

router.get('/:id', bookController.getBook)

router.put('/:id', authMiddleware.userIsAdmin, authMiddleware.jwtValidate, bookController.upDateBook)

router.delete('/:id', authMiddleware.userIsAdmin, authMiddleware.jwtValidate, bookController.deleteBook)

module.exports = router
