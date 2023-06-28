const express = require('express')
const { bookController } = require('../controller')

const router = express.Router()

router.post('/', bookController.createBook)

router.get('/', bookController.getBooks)

router.get('/:id', bookController.getBook)

router.put('/:id', bookController.upDateBook)

router.delete('/:id', bookController.deleteBook)

module.exports = router
