const { DataTypes } = require('sequelize')
const { sequelize } = require('../config/config.db')

const Library = new sequelize.define('Libary', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false
  },

  location: {
    type: DataTypes.STRING,
    allowNull: false
  },

  phone: {
    type: DataTypes.STRING,
    allowNull: null
  }
})

module.exports = Library