const express = require("express");
const router = express.Router({ mergeParams: true });
const routeController = require("../common/route.controller");
const auth = require("../middlewares/auth")


const memorandum = require("../controllers/memorandum.controller");

router.get("/received",[auth.required], (req, res) => {
  memorandum.getAllReceivedByUserToken(req, res);
});

router.get("/sent",[auth.required], (req, res) => {
  memorandum.getAllSentByUserToken(req, res);
});

router.patch("/:id", [auth.required], (req, res) => {
  routeController.handleRequest(req, res, memorandum.actualizar);
});

router.get("/:id", [auth.required], (req, res) => {
  routeController.handleRequest(req, res, memorandum.getById);
});

router.post("/new", [auth.required], (req, res) => {
  routeController.handleRequest(req, res, memorandum.create);
});


module.exports = router;
