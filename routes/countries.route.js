const express = require("express");
const router = express.Router({ mergeParams: true });
const routeController = require("../common/route.controller");
const CountriesController = require("../controllers/countries.controller");

router.get("/", (request, response) => {
  routeController.handleRequest(
    request,
    response,
    CountriesController.getAllCountries
  );
});

router.get("/:id", (request, response) => {
  console.log("get by id route paises" + request.params);
  routeController.handleRequest(request, response, CountriesController.getById);
});

router.post("/", (request, response) => {
  console.log("create route paises" + request.body);
  routeController.handleRequest(
    request,
    response,
    CountriesController.crearPais
  );
});

router.patch("/:id", (request, response) => {
  console.log(
    "patch route paises body " +
      JSON.stringify(request.body) +
      " - params" +
      JSON.stringify(req.params)
  );
  routeController.handleRequest(request, response);
});

module.exports = router;
