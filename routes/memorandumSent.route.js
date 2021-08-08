const express = require("express");
const router = express.Router({ mergeParams: true });
const routeController = require("../common/route.controller");

const memorandumSent = require("../controllers/memorandumSent.controller");

router.get("/", (req, res) => {
  routeController.handleRequest(req, res, memorandumSent.getAll);
});

router.get("/:id", (req, res) => {
  routeController.handleRequest(req, res, memorandumSent.getById);
});

router.post("/", (req, res) => {
  routeController.handleRequest(req, res, memorandumSent.create);
});

router.patch("/:id", (req, res) => {
  routeController.handleRequest(req, res, memorandumSent.actualizar);
});

module.exports = router;
