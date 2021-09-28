const memorandumModel = require("../models/memorandumModel");
const error = require("../common/error");
const exceptions = require("../common/exceptions");

const getAllService = async (whereFilter) => {
  console.log("getAllService - memorandum");

  const memorandums = await memorandumModel.findAll({
    /* attributes: ["id", "message"], */
    where: whereFilter,
  });
  console.log("memo return : " + memorandums);
  return memorandums;
};


const getById = async (id) => {
  console.log("getById - id: " + id);
  const memorandum = await memorandumModel.findByPk(id);
  if (!memorandum) {
    throw new error.AppError(exceptions.exceptionType.productos.notFound);
  }
  console.log("memo return : " + memorandum);
  return memorandum;
};

const create = async (data, userId) => {
  const { title, message, receiverId } = data;
  const senderId = userId;
  console.log(
    "Crear memorandum:" + JSON.stringify({ userId, title, message, receiverId })
  );
  const memorandum = await memorandumModel.create({
    title, message, senderId, receiverId
  }); 

  return memorandum;
};

const actualizar = async (id, data) => {
  const { nombre, precio, categoria, estado } = data;
  console.log(
    "actualizar memorandum:" +
      JSON.stringify({ nombre, precio, categoria, estado })
  );
  const memorandum = await memorandumModel.update(
    { estado },
    {
      where: {
        id,
      },
    }
  );
  if (!memorandum) {
    return false;
  }
  return true;
};

module.exports = {
  getAllService,
  getById,
  create,
  actualizar,
};
