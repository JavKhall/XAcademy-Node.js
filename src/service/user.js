const { userProvider } = require('../provider')

const createUser = async (user) => {
  return await userProvider.createUser (user)
}

const getUsers = async () => {
  return await userProvider.getUsers ()
}

const getUser = async (idUser) => {
  return await userProvider.getUser (idUser)
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
  upDateUser,
  deleteUser
}