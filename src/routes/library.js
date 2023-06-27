const express = require('express')
const { libraryController } = require('../controller')

const router = express.Router()

router.post('/', libraryController.createLibrary)

module.exports = router
