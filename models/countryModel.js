const Sequelize = require("sequelize");
const { sequelizeConnection } = require("../config/server/sequelizeConfig");

const CountryModel = sequelizeConnection.define(
  "country",
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    shortname: {
      type: Sequelize.STRING,
      allowNull: false,
      field: "iso_alpha2",
    },
    name: {
      type: Sequelize.INTEGER,
      allowNull: true,
      field: "name",
    },
  },
  {
    tableName: "countries",
    timestamps: false,
  }
);
module.exports = CountryModel;
