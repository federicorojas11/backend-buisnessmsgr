const express = require("express");
const router = express.Router({ mergeParams: true });
const routeController = require("../common/route.controller");
const auth = require("../middlewares/auth")


const memorandum = require("../controllers/memorandum.controller");

router.get("/received",[auth.required], (req, res) => {
  memorandum.getAllReceivedByUserToken(req, res);
  // routeController.handleRequest(req, res, memorandum.getAllReceivedByUserToken(req, res));
});

router.get("/sent",[auth.required], (req, res) => {
  routeController.handleRequest(req, res, memorandum.getAllSentByUserId);
});

router.get("/:id", [auth.required], (req, res) => {
  routeController.handleRequest(req, res, memorandum.getById);
});

router.post("/", [auth.required], (req, res) => {
  routeController.handleRequest(req, res, memorandum.create);
});

router.patch("/:id", [auth.required], (req, res) => {
  routeController.handleRequest(req, res, memorandum.actualizar);
});

module.exports = router;
