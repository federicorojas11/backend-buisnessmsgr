const express = require('express')
const router = express.Router({ mergeParams: true })
const routeController = require("../common/route.controller")
const PaisesController = require("../controllers/paises.controller")

router.get('/', (request, response) => {
  routeController.handleRequest(request, response,PaisesController.getAll)
})

router.get('/:id', (request, response) => {
  console.log("get by id route paises" +request.params);
  routeController.handleRequest(request, response,PaisesController.getById)
})

router.post('/', (request, response) => {
  console.log("create route paises" +request.body);
  routeController.handleRequest(request, response,PaisesController.crearPais)
})

router.patch('/:id', (request, response) => {
  console.log("patch route paises body " +JSON.stringify(request.body) +" - params" + JSON.stringify(req.params));
  routeController.handleRequest(request, response,PaisesController.actualizarPais)
})

module.exports = router