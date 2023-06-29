const { DataTypes } = require('sequelize')
const { sequelize } = require('../config/config.db')

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  username: {
    type: DataTypes.STRING,
    allowNull: false, 
    unique: true
  },

  password: {
    type: DataTypes.STRING, 
    allowNull: false
  }, 

  name: {
    type: DataTypes.STRING,
    allowNull: false
  },

  surname: {
    type: DataTypes.STRING,
    allowNull: false
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, 
    validate: {
      isEmail: true
    }
  }, 

  status: {
    type: DataTypes.STRING,
    defaultValue: 'ENABLE'
  }
}, 
{
  timestamps: false
})

module.exports = User