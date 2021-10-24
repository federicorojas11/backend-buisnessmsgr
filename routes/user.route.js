const express = require("express");
const router = express.Router({ mergeParams: true });
const UserController = require("../controllers/user.controller");
const routeController = require("../common/route.controller");
const auth = require("../middlewares/auth");

router.get("/", [auth.required], (request, response) => {
  routeController.handleRequest(request, response, UserController.getAll);
});

router.get("/:id", (request, response) => {
  console.log("get by id route" + request.params);
  routeController.handleRequest(request, response, UserController.getById);
});

router.delete("/:id", (request, response) => {
  console.log(request.params);
  const params = request.params;
  const userId = params.id;
  response.send("delete by id");
});

router.patch("/:id", (request, response) => {
  console.log(request.params);
  const params = request.params;
  const userId = params.id;
  response.send("patch by id");
});

router.put("/:id", (request, response) => {
  console.log(request.params);
  const params = request.params;
  const userId = params.id;
  response.send("put by id");
});

router.post("/", (request, response) => {
  routeController.handleRequest(request, response, UserController.createUser);
});

module.exports = router;
