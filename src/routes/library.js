const express = require('express')
const { libraryController } = require('../controller')

const router = express.Router()

router.post('/', libraryController.createLibrary)

router.get('/', libraryController.getLibraries)

router.get('/:id', libraryController.getLibrary)

router.put('/:id', libraryController.upDateLibrary)

router.delete('/:id', libraryController.deleteLibrary)

module.exports = router
