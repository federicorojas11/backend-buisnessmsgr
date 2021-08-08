const express = require("express");
const router = express.Router({ mergeParams: true });
const routeController = require("../common/route.controller");

const ProductosController = require("../controllers/memorandumRec.controller");

router.get("/", (req, res) => {
  routeController.handleRequest(req, res, ProductosController.getAll);
});

router.get("/:id", (req, res) => {
  routeController.handleRequest(req, res, ProductosController.getById);
});

router.post("/", (req, res) => {
  routeController.handleRequest(req, res, ProductosController.create);
});

router.patch("/:id", (req, res) => {
  routeController.handleRequest(req, res, ProductosController.actualizar);
});

module.exports = router;
