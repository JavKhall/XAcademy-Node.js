const { libraryService } = require('../service')

const createLibrary = async (req, res) => {
  try {
    const newLibrary = await libraryService.createLibrary(req.body)
    res.json(newLibrary)
  } catch (err) {
    res.status(400).json({action: "createLibrary", error: err.message })
  }
}

const getLibraries = async (req, res) => {
  try {
    const libraries = await libraryService.getLibraries()
    res.json(libraries)
  } catch (err) {
    res.status(400).json({action: "getLibrary", error: err.message })
  }
}

const getLibrary = async (req, res) => {
  try {
    const library = await libraryService.getLibrary(req.params.id)
    res.json(library)
  } catch (err) {
    res.status(400).json({action: "getLibrary", error: err.message })
  }
}

const upDateLibrary = async (req, res) => {
  try {
    const idLibrary = req.params.id
    const { name, location, phone } = req.body
    const library = await libraryService.upDateLibrary(idLibrary, { name, location, phone })
    res.json(library)
  } catch (err) {
    res.status(400).json({action: "upDateLibrary", error: err.message })
  }
}

const deleteLibrary = async (req, res) => {
  try {
    const library = await libraryService.deleteLibrary( req.params.id )
    res.json({message: `Se elimino la libreria: ${library.name}`})
  } catch (err) {
    res.status(400).json({action: "deleteLibrary", error: err.message })
  }
}

module.exports = {
  createLibrary,
  getLibraries,
  getLibrary,
  upDateLibrary,
  deleteLibrary
}