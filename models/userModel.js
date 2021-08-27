const Sequelize = require("sequelize");
const { sequelizeConnection } = require("../config/server/sequelizeConfig");

const UserModel = sequelizeConnection.define(
  "user",
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      type: Sequelize.STRING,
      allowNull: false,
      field: "firstname",
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false,
      field: "lastname",
    },
    userName: {
      type: Sequelize.STRING,
      allowNull: false,
      field: "username",
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
      field: "password",
    },
    countryId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: "country_id",
    },
    cityId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: "city_id",
    },
    createdAt: {
      type: Sequelize.DATE,
      field: "created_at",
    },
    updatedAt: {
      type: Sequelize.DATE,
      field: "updated_at",
    },
  },
  {
    tableName: "users",
    timestamps: true,
  }
);
module.exports = UserModel;
