const { libraryService } = require('../service')

const createLibrary = async (req, res) => {
  try {
    const newLibrary = await libraryService.createLibrary(req.body)
    res.json(newLibrary)
  } catch (err) {
    res.status(400).json({action: "crear libreria", error: err.message })
  }
}

module.exports = {
  createLibrary
}