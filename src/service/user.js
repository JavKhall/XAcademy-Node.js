const { userProvider } = require('../provider')

const createUser = async (user) => {
  return await userProvider.createUser (user)
}

const getUsers = async () => {
  return await userProvider.getUsers ()
}

const getUser = async (data) => {
  return await userProvider.getUser (data)
}

const validateUser = async (options) => {
  return await userProvider.validateUser (options)
}

const upDateUser = async (idUser, data) => {
  return await userProvider.upDateUser (idUser, data)
}

const deleteUser = async (idUser) => {
  return await userProvider.deleteUser (idUser)
}

module.exports = {
  createUser,
  getUsers,
  getUser,
  validateUser,
  upDateUser,
  deleteUser
}