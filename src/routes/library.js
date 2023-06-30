const express = require('express')
const { libraryController } = require('../controller')
const { authMiddleware } = require('../middlewares')

const router = express.Router()

router.post('/', authMiddleware.userIsAdmin, authMiddleware.jwtValidate, libraryController.createLibrary)

router.get('/', libraryController.getLibraries)

router.get('/:id', libraryController.getLibrary)

router.put('/:id', authMiddleware.userIsAdmin, authMiddleware.jwtValidate, libraryController.upDateLibrary)

router.delete('/:id', authMiddleware.userIsAdmin, authMiddleware.jwtValidate, libraryController.deleteLibrary)

module.exports = router
