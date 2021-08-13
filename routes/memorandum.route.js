const express = require("express");
const router = express.Router({ mergeParams: true });
const routeController = require("../common/route.controller");

const memorandum = require("../controllers/memorandum.controller");

router.get("/", (req, res) => {
  routeController.handleRequest(req, res, memorandum.getAll);
});

router.get("/:id", (req, res) => {
  routeController.handleRequest(req, res, memorandum.getById);
});

router.post("/", (req, res) => {
  routeController.handleRequest(req, res, memorandum.create);
});

router.patch("/:id", (req, res) => {
  routeController.handleRequest(req, res, memorandum.actualizar);
});

module.exports = router;
