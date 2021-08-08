const express = require("express");
const router = express.Router({ mergeParams: true });
const routeController = require("../common/route.controller");

const memorandumRec = require("../controllers/memorandumRec.controller");

router.get("/", (req, res) => {
  routeController.handleRequest(req, res, memorandumRec.getAll);
});

router.get("/:id", (req, res) => {
  routeController.handleRequest(req, res, memorandumRec.getById);
});

router.post("/", (req, res) => {
  routeController.handleRequest(req, res, memorandumRec.create);
});

router.patch("/:id", (req, res) => {
  routeController.handleRequest(req, res, memorandumRec.actualizar);
});

module.exports = router;
