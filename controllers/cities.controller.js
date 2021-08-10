const CitiesService = require("../services/CitiesService");

const getAllCities = async (req, res) => {
  const { id, name, country_id } = req.query;
  console.log("INIT GET cities:" + JSON.stringify({ id, name, country_id }));
  const cities = await CitiesService.getAllCities({
    id,
    name,
    country_id,
  });
  //console.log("response controller " + JSON.stringify(cities));
  return res.status(200).json(cities);
};

const getById = async (req, res) => {
  console.log(req.params);
  const params = req.params;
  const CitiesId = params.id;
  const Cities = await CitiesService.getById(CitiesId);
  //console.log("response controller " + JSON.stringify(Cities));
  return res.status(200).json(Cities);
};

module.exports = {
  getAllCities,
  getById,
};
