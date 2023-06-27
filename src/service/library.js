const { libraryProvider } = require('../provider')

const createLibrary = async (library) => {
  return await libraryProvider.createLibrary (library)
}

module.exports = {
  createLibrary
}