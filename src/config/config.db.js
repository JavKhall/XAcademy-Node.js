const { Sequelize } = require('sequelize')

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "../database/database.sqlite"
})

const initDataBase = async () => {
  try {
    await sequelize.authenticate()
    console.log ("Conexion con la base de datos establecida")
    await sequelize.sync({ force: false })
  } catch(err) {
    console.error("Error al conectar con la base de datos", err)
  }
}

module.exports = {
  sequelize, 
  initDataBase
}