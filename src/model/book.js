const { DataTypes, literal } = require('sequelize')
const { sequelize } = require('../config/config.db')

const Book = sequelize.define('Book', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true, 
    autoIncrement: true
  }, 

  isbn: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  tittle: {
    type: DataTypes.STRING,
    allowNull: false
  },

  author: {
    type: DataTypes.STRING,
    allowNull: false
  }, 

  year: {
    type: DataTypes.STRING,
    allowNull: false
  },

  idLibrary: {
    type: DataTypes.INTEGER,
    allowNull: true
  },

  status: {
    type: DataTypes.STRING, 
    defaultValue: "ENABLE"
  }
},
{
  timestamps: false
})

module.exports = Book