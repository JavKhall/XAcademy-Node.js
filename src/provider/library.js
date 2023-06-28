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

const getLibraries = async () => {
  try {
    const library = await libraryModel.findAll({
      where: { status: 'ENABLE' }
    })
    return library
  } catch(err) {
    console.error("Error al obtener las librerias", err)
    throw err
  }
}

const getLibrary = async (idLibrary) => {
  try {
    const library = await libraryModel.findByPk(idLibrary, {
      where: { status: 'ENABLE' }
    })
    return library
  } catch(err) {
    console.error(`Error al obtener la libreria con el id ${idLibrary}`, err)
    throw err
  }
}

const upDateLibrary = async (idLibrary, data) => {
  try {
    const library = await libraryModel.update({
        ...data
      }, { 
        where: {id: idLibrary}
      }
    )
    return library
  } catch(err) {
    console.error(`Error al actualizar la libreria con el id ${idLibrary}`, err)
    throw err
  }
}

module.exports = {
  createLibrary,
  getLibraries,
  getLibrary,
  upDateLibrary
}