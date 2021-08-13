const Sequelize = require("sequelize");
const { sequelizeConnection } = require("../config/server/sequelizeConfig");
const constants = require("../common/constants");

const MemorandumModel = sequelizeConnection.define(
  "memorandum",
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
      field: "title",
    },
    message: {
      type: Sequelize.STRING,
      allowNull: true,
      field: "message",
    },
    senderId: {
      type: Sequelize.INTEGER,
      allowNull: true,
      field: "sender_id",
    },
    senderDelStatus: {
      type: Sequelize.INTEGER,
      allowNull: true,
      field: "sender_del_status",
    },
    receiverId: {
      type: Sequelize.INTEGER,
      allowNull: true,
      field: "receiver_id",
    },
    receiverDelStatus: {
      type: Sequelize.INTEGER,
      allowNull: true,
      field: "receiver_del_status",
    },
    time: {
      type: Sequelize.DATE,
      allowNull: false,
      field: "time",
      defaultValue: constants.estado.FALSE,
    },
    readed: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: "readed",
      defaultValue: constants.estado.FALSE,
    },
  },
  {
    tableName: "memorandumReceived",
    timestamps: false,
  }
);
module.exports = MemorandumModel;
