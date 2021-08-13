const MemorandumService = require("../services/memorandumService");
const exceptions = require("../common/exceptions");
const error = require("../common/error");

const getAllSentByUserId = async (req, res) => {
  const query = req.query;
  console.log("get all controller - query : " + JSON.stringify(query));

  // The user is "receiver = true"
  // or is "sender = false"
  const isReceiver = false;

  if (!req.query.senderId & !req.query.receiverId) {
    throw new error.AppError(
      exceptions.exceptionType.memorandum.memorandumNotFound
    );
  }
  const filter = req.query.senderId;
  const memorandums = await MemorandumService.getAllService(filter, isReceiver);
  res.status(200).json(memorandums);
};

const getAllReceivedByUserId = async (req, res) => {
  const query = req.query;
  console.log("get all controller - query : " + JSON.stringify(query));

  // The user is "receiver = true"
  // or is "sender = false"
  const isReceiver = true;

  if (!req.query.senderId & !req.query.receiverId) {
    throw new error.AppError(
      exceptions.exceptionType.memorandum.memorandumNotFound
    );
  }
  const filter = req.query.receiverId;
  const memorandums = await MemorandumService.getAllService(filter, isReceiver);
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
  getAllSentByUserId,
  getAllReceivedByUserId,
  getById,
  create,
  actualizar,
};
