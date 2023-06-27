const { libraryModel } = require('../model')

const createLibrary = async (library) => {
  try {
    const newLibrary = await libraryModel.create(library)
    return newLibrary
  } catch(err) {
    console.error("Error al registrar la libreria", err)
    throw err
  }
}

module.exports = {
  createLibrary,
}