const { libraryModel } = require('../model')

// * CREACION de la libreria
const createLibrary = async (library) => {
  try {
    const newLibrary = await libraryModel.create(library)
    const { id, name, location, phone} = newLibrary
    return { id, name, location, phone}
  } catch(err) {
    console.error("Error al registrar la libreria", err)
    throw err
  }
}

// * OBTENCION de todas las libreria
const getLibraries = async () => {
  try {
    const library = await libraryModel.findAll({
      where: { status: 'ENABLE' },
      attributes: ['id', 'name', 'location', 'phone']
    })
    return library
  } catch(err) {
    console.error("Error al obtener las librerias", err)
    throw err
  }
}

// * OBTENCION de una libreria en particular
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

// * ACTUALIZACION de una libreria en particular
const upDateLibrary = async (idLibrary, data) => {
  try {
    await libraryModel.update({
      ...data
    }, { 
      where: { id: idLibrary }
    })
    return await libraryModel.findByPk(idLibrary)
  } catch(err) {
    console.error(`Error al actualizar la libreria con el id ${idLibrary}`, err)
    throw err
  }
}

// * "ELIMINACION" de la libreria
const deleteLibrary = async (idLibrary) => {
  try {
    await libraryModel.update({ status: "DISABLE" }, { 
      where: {id: idLibrary}
    })

    const library = await libraryModel.findByPk(idLibrary, {
      attributes: ['name']
    })
    return library
  } catch(err) {
    console.error(`Error al eliminar la libreria con el id ${idLibrary}`, err)
    throw err
  }
}

module.exports = {
  createLibrary,
  getLibraries,
  getLibrary,
  upDateLibrary,
  deleteLibrary
}