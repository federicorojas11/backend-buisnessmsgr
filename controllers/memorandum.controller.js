const ProductService = require("../services/memorandumService");
const exceptions = require("../common/exceptions");
const error = require("../common/error");

const getAll = async (req, res) => {
  const query = req.query;
  console.log("get all controller - query : " + JSON.stringify(query));
  /*   if (!req.query.estado) {
    throw new error.AppError(
      exceptions.exceptionType.memorandum.memorandumNotFound,
    );
  } 
  const filter = {
    estado: req.query.estado,
  };
  if (req.query.nombre) {
    filter.nombre = req.query.nombre;
  }*/

  //llamar al servicio de memorandum
  const memorandums = await MemorandumService.getAllService(/* filter */);
  res.status(200).json(memorandums);
};

const getById = async (req, res) => {
  const params = req.params;
  console.log("get all controller - params : " + JSON.stringify(params));
  const id = params.id;
  const memorandum = await MemorandumService.getById(id);
  res.status(200).json(memorandum);
};

const create = async (req, res) => {
  const data = req.body;
  console.log("create controller - body : " + JSON.stringify(data));
  const memorandumId = await MemorandumService.create(data);
  res.status(201).json({ memorandumId });
};

const actualizar = async (req, res) => {
  const data = req.body;
  const params = req.params;
  console.log("actualizar controller - params : " + JSON.stringify(params));
  const id = params.id;
  console.log("actualizar controller - body : " + JSON.stringify(data));
  const actualizado = await MemorandumService.actualizar(id, data);
  res.status(200).json({ actualizado });
};

module.exports = {
  getAll,
  getById,
  create,
  actualizar,
};
