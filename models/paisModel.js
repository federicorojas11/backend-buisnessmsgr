const Sequelize = require('sequelize')
const { sequelizeConnection } = require('../config/server/sequelizeConfig')

const PaisModel = sequelizeConnection.define(
  'paises',
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: Sequelize.STRING,
      allowNull: false,
      field: 'nombre'
    },
      poblacion: {
      type: Sequelize.INTEGER,
      allowNull: true,
      field: 'poblacion'
    },
  },
  {
    tableName: 'paises',
    timestamps: false
  }
)
module.exports = PaisModel
