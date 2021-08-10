const Sequelize = require("sequelize");
const { sequelizeConnection } = require("../config/server/sequelizeConfig");

const CityModel = sequelizeConnection.define(
  "city",
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.INTEGER,
      allowNull: true,
      field: "name",
    },
    country_id: {
      type: Sequelize.STRING,
      allowNull: false,
      field: "country_id",
    },
  },
  {
    tableName: "cities",
    timestamps: false,
  }
);

module.exports = CityModel;
