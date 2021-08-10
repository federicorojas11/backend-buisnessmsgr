const CountriesService = require("../services/CountriesService");

const getAllCountries = async (req, res) => {
  const { id, shortname, name } = req.query;
  console.log("INIT GET countries:" + JSON.stringify({ id, shortname, name }));
  const countries = await CountriesService.getAllCountries({
    id,
    shortname,
    name,
  });
  console.log("response controller " + JSON.stringify(countries));
  return res.status(200).json(countries);
};

const getById = async (req, res) => {
  console.log(req.params);
  const params = req.params;
  const CountriesId = params.id;
  const Countries = await CountriesService.getById(CountriesId);
  //console.log("response controller " + JSON.stringify(Countries));
  return res.status(200).json(Countries);
};

module.exports = {
  getAllCountries,
  getById,
};
