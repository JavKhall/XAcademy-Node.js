const { DataTypes } = require('sequelize')
const { sequelize } = require('../config/config.db')
const Book = require('./book')

const Library = sequelize.define('Libary', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
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
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'ENABLE' 
  }
}, 
{
  timestamps: false
})

Library.hasMany(Book, { foreignKey: {
  name: 'idLibrary',
  allowNull: true
} });
Book.belongsTo(Library);

module.exports = Library