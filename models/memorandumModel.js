const Sequelize = require("sequelize");
const { sequelizeConnection } = require("../config/server/sequelizeConfig");

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
      allowNull: false,
      field: "sender_id",
    },
    senderDelStatus: {
      type: Sequelize.INTEGER,
      allowNull: true,
      field: "sender_del_status",
      defaultValue: false
    },
    receiverId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: "receiver_id",
    },
    receiverDelStatus: {
      type: Sequelize.INTEGER,
      allowNull: true,
      field: "receiver_del_status",
      defaultValue: false
    },
    time: {
      type: Sequelize.DATE,
      allowNull: false,
      field: "time",
      defaultValue: Sequelize.NOW
    },
    readed: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: "readed",
      defaultValue: false
    },
  },
  {
    tableName: "memorandum",
    timestamps: false,
  }
);
module.exports = MemorandumModel;
