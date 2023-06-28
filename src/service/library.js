const { libraryProvider } = require('../provider')

const createLibrary = async (library) => {
  return await libraryProvider.createLibrary (library)
}

const getLibraries = async () => {
  return await libraryProvider.getLibraries ()
}

const getLibrary = async (idLibrary) => {
  return await libraryProvider.getLibrary (idLibrary)
}

const upDateLibrary = async (idLibrary, data) => {
  return await libraryProvider.upDateLibrary (idLibrary, data)
}

module.exports = {
  createLibrary,
  getLibraries,
  getLibrary,
  upDateLibrary
}