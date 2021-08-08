const PaisService = require("../services/PaisesService");

const getAll = async (req, res) => {
  const { nombre, poblacion } = req.query;
  console.log("INIT GET paises:" + JSON.stringify({ nombre, poblacion }));
  const paises = await PaisService.getAll({ nombre, poblacion });
  console.log("response controller " + JSON.stringify(paises));
  return res.status(200).json(paises);
};

const getById = async (req, res) => {
  console.log(req.params);
  const params = req.params;
  const PaisId = params.id;
  const Pais = await PaisService.getById(PaisId);
  console.log("response controller " + JSON.stringify(Pais));
  return res.status(200).json(Pais);
};

const crearPais = async (req, res) => {
  const { nombre, poblacion } = req.body;
  console.log("Crear pais:" + JSON.stringify({ nombre, poblacion }));
  const Pais = await PaisService.createPaises({ nombre, poblacion });
  console.log("response controller " + JSON.stringify(Pais));
  return res.status(201).json(Pais);
};

const actualizarPais = async (req, res) => {
  const { nombre, poblacion } = req.body;
  const { id } = req.params;
  console.log(
    "actualizar pais data :" +
      JSON.stringify({ nombre, poblacion } + " - id:" + id)
  );
  const Pais = await PaisService.actualizarPais(id, { nombre, poblacion });
  console.log("response controller " + JSON.stringify(Pais));
  return res.status(200).json(Pais);
};

module.exports = {
  crearPais,
  getAll,
  getById,
  actualizarPais,
};
