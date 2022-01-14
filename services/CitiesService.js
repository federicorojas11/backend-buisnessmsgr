const error = require("../common/error");
const exceptions = require("../common/exceptions");
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
  const whereFilter = { country_id: country_id };
  const filterAtr = ["name", "country_id"];

  if (name) {
    whereFilter.name = name;
  }
  if (country_id) {
    whereFilter.country_id = country_id;
  } else {
    return exceptions.exceptionType.city.notFound;
  }

  console.log("getAll - whereFilter[" + whereFilter + "]");

  const cities = await CityModel.findAll({
    attributes: filterAtr,
    where: whereFilter,
  });
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

const getIdByName = async (cityName) => {
  console.log("get id  - cityId[" + cityName + "]");
  const city = await CityModel.findOne({
    attributes: ["id"],
    where: { name: cityName },
  });
  console.log("get user service " + city);
  if (!city) {
    throw new error.AppError(exceptions.exceptionType.city.notFound);
  }
  return city.id;
};

module.exports = {
  getAllCities,
  getById,
  getIdByName,
};
