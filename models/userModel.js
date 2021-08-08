const Sequelize = require('sequelize')
const { sequelizeConnection } = require('../config/server/sequelizeConfig')

const UserModel = sequelizeConnection.define(
  'user',
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    userName: {
      type: Sequelize.STRING,
      allowNull: false,
      field: 'user_name'
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    createdAt: {
      type: Sequelize.DATE,
      field: 'created_at'
    },
    updatedAt: {
      type: Sequelize.DATE,
      field: 'updated_at'
    }
  },
  {
    tableName: 'user',
    timestamps: true
  }
)
module.exports = UserModel
