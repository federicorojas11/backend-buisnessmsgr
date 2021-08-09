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

module.exports = { CountryModel, CityModel };
