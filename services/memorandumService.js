const memorandumModel = require("../models/memorandumModel");
const error = require("../common/error");
const exceptions = require("../common/exceptions");

const getAllService = async ({ nombre, estado }) => {
  console.log("getAllService - nombre" + nombre + " - estado: " + estado);
  const where = {};
  if (estado) {
    where.estado = estado;
  }
  if (nombre) {
    where.nombre = nombre;
  }
  const memorandums = await memorandumModel.findAll({
    attributes: ["id", "message"],
    where: where,
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

const create = async (data) => {
  const { title, message, estado } = data;
  console.log(
    "Crear memorandum:" + JSON.stringify({ nombre, precio, categoria, estado })
  );
  const memorandum = await memorandumModel.create({
    nombre,
    precio,
    categoria,
    estado,
  });

  return memorandum.id;
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
