const error = require("../common/error");
const exceptions = require("../common/exceptions");
const CountryModel = require("../models/countryModel");
const CityModel = require("../models/cityModel");

const getAllCities = async ({ id, name, country_id }) => {
  console.log(
    "getAll - id[" +
      id +
      "] - name[" +
      name +
      "] - country_id [" +
      country_id +
      "]"
  );
  const whereFilter = {};
  const filterAtr = ["name"];

  if (name) {
    whereFilter.name = name;
  }
  if (country_id) {
    whereFilter.country_id = country_id;
  }
  console.log("getAll - whereFilter[" + whereFilter + "]");

  const cities = await CityModel.findAll({
    attributes: filterAtr,
    where: whereFilter,
  });
  //console.log("get user service " + countries);
  return cities;
};

const getById = async (cityId) => {
  console.log("get by id service - cityId[" + cityId + "]");
  const city = await CityModel.findByPk(cityId, {
    attributes: ["name"],
  });
  console.log("get user service " + city);
  if (!city) {
    throw new error.AppError(exceptions.exceptionType.city.notFound);
  }
  return city;
};

module.exports = {
  getAllCities,
  getById,
};
