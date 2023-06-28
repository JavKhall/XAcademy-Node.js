const { libraryService } = require('../service')

const createLibrary = async (req, res) => {
  try {
    const newLibrary = await libraryService.createLibrary(req.body)
    res.json(newLibrary)
  } catch (err) {
    res.status(400).json({action: "createLibreria", error: err.message })
  }
}

const getLibraries = async (req, res) => {
  try {
    const libraries = await libraryService.getLibraries()
    res.json(libraries)
  } catch (err) {
    res.status(400).json({action: "getLibreria", error: err.message })
  }
}

const getLibrary = async (req, res) => {
  try {
    const library = await libraryService.getLibrary(req.params.id)
    res.json(library)
  } catch (err) {
    res.status(400).json({action: "getLibrery", error: err.message })
  }
}

const upDateLibrary = async (req, res) => {
  try {
    const idLibrary = req.params.id
    const { name, location, phone } = req.body
    const library = await libraryService.upDateLibrary(idLibrary, { name, location, phone })
    res.json(library)
  } catch (err) {
    res.status(400).json({action: "upDateLibrery", error: err.message })
  }
}

const deleteLibrary = async (req, res) => {
  try {
    const library = await libraryService.deleteLibrary( req.params.id )
    res.json({message: `Se elimino la libreria: ${library.name}`})
  } catch (err) {
    res.status(400).json({action: "deleteLibrery", error: err.message })
  }
}

module.exports = {
  createLibrary,
  getLibraries,
  getLibrary,
  upDateLibrary,
  deleteLibrary
}