const MemorandumService = require("../services/memorandumService");
const UserService = require("../services/UserService")
const exceptions = require("../common/exceptions");
const error = require("../common/error");

const getAllReceivedByUserToken = async (req, res) => {
// console.log("req user: " + req.user);
console.log("get received memorandums from user: " + req.user.id);
if (!req.user) {
  throw new error.AppError(
    exceptions.exceptionType.users.notFound
  );
  }
  userId = req.user.id; 
  whereFilter = { receiver_id : userId }
  
  const memorandums = await MemorandumService.getAllService(whereFilter);
 
  console.log("Response: " + memorandums );
  return res.status(200).json(memorandums).lenght;
};

const getAllSentByUserToken = async (req, res) => {
// console.log("req user: " + req.user);
console.log("get sent memorandums from user: " + req.user.id);
if (!req.user) {
  throw new error.AppError(
    exceptions.exceptionType.users.notFound
  );
  }
  userId = req.user.id; 
  whereFilter = { sender_id : userId }
  
  const memorandums = await MemorandumService.getAllService(whereFilter);
  return res.status(200).json(memorandums);
};

const getById = async (req, res) => {
  const params = req.params;
  console.log("get all controller - params : " + JSON.stringify(params));
  const id = params.id;
  const memorandum = await MemorandumService.getById(id);
  res.status(200).json(memorandum);
};

const create = async (req, res) => {
  if (!req.user) {
    throw new error.AppError(
      exceptions.exceptionType.users.notFound
    );
    } 

  let receiverId = 0 ;
  const userId = req.user.id;

  await UserService.findUserIdByName(req.body.params.userName).then(user =>{
    console.log(user);
    receiverId = user.id;;
  })
  

  console.log("create memorandum controller \nuser " + receiverId + '\ndata:' + JSON.stringify(req.body.params));
  const memorandum = await MemorandumService.create(req.body.params.message, req.body.params.title, receiverId, userId);
  return res.status(201).json({ memorandum });   
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

  getAllSentByUserToken,
  getAllReceivedByUserToken,
  getById,
  create,
  actualizar,
};
