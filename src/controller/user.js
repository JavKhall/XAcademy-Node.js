const { userService } = require('../service')

const createUser = async (req, res) => {
  try {
    const newUser = await userService.createUser(req.body)
    res.json(newUser)
  } catch (err) {
    res.status(400).json({action: "createUser", error: err.message })
  }
}

const getUsers = async (req, res) => {
  try {
    const users = await userService.getUsers()
    res.json(users)
  } catch (err) {
    res.status(400).json({action: "getUsers", error: err.message })
  }
}

const getUser = async (req, res) => {
  try {
    const user = await userService.getUser(req.params.data)
    res.json(user)
  } catch (err) {
    res.status(400).json({action: "getUser", error: err.message })
  }
}

const upDateUser = async (req, res) => {
  try {
    const idUser = req.params.id
    const { username, name, surname, pass, email } = req.body
    const us = await userService.upDateUser(idUser, { username, name, surname, pass, email })
    res.json(us)
  } catch (err) {
    res.status(400).json({action: "upDateUser", error: err.message })
  }
}

const deleteUser = async (req, res) => {
  try {
    const user = await userService.deleteUser( req.params.id )
    res.json({ message: `Se elimino el usuario: ${user.username}` })
  } catch (err) {
    res.status(400).json({action: "deleteUser", error: err.message })
  }
}

module.exports = {
  createUser,
  getUsers,
  getUser,
  upDateUser,
  deleteUser
}