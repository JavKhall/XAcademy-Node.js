const { userModel } = require('../model')
const { Op } = require('sequelize')

// * CREACION del usuario
const createUser = async (user) => {
  try {
    const newUser = await userModel.create(user)
    const { id, username, name, surname, email } = newUser
    return { id, username, name, surname, email }
  } catch(err) {
    console.error("Error al registrar el usario", err)
    throw err
  }
}

// * OBTENCION de todos los usuario
const getUsers = async () => {
  try {
    const users = await userModel.findAll({
      where: { status: 'ENABLE' },
      attributes: ['id', 'username', 'name', 'surname', 'email']
    })
    return users
  } catch(err) {
    console.error("Error al obtener los usuarios", err)
    throw err
  }
}

// * OBTENCION un usuario
const getUser = async (data) => {
  try {
    const user = await userModel.findOne({
      where: {
        status: 'ENABLE',
        [Op.or]: [ 
          { username: data },
          { id: data }
        ]
      } 
      
    })
    const { id, username, name, surname, email } = user
    return { id, username, name, surname, email }
  } catch(err) {
    console.error(`Error al obtener el usuario con el id ${idUser}`, err)
    throw err
  }
}


const validateUser = async (options) => {
  try {
    const user = await userModel.findAll({
      where: {
        username: options.username,
        password: options.password
      }
    })
    if (user.length != 0) {
      return user
    }
    return false
  } catch(err) {
      console.error("No se encuentra el usuario", err)
      throw err
  }
}


// * ACTUALIZACION de un usuario
const upDateUser = async (idUser, data) => {
  try {
    await userModel.update({
      ...data
    }, { 
      where: { id: idUser }
    })
    // TODO falta filtrado en los otros modelos
    const { id, username, name, surname, email } = await userModel.findByPk(idUser)
    return { id, username, name, surname, email }
  } catch(err) {
    console.error(`Error al actualizar el usuario con el id ${idUser}`, err)
    throw err
  }
}

// * "ELIMINACION" de un usuario
const deleteUser = async (idUser) => {
  try {
    await userModel.update({ status: "DISABLE" }, { 
      where: {id: idUser}
    })

    const user = await userModel.findByPk(idUser, {
      attributes: ['username']
    }) 
    return user
  } catch(err) {
    console.error(`Error al eliminar el usuario con el id ${idUser}`, err)
    throw err
  }
}

module.exports = {
  createUser,
  getUsers,
  getUser,
  validateUser, 
  upDateUser,
  deleteUser
}