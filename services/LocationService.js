const error = require("../common/error");
const exceptions = require("../common/exceptions");
const CountryModel = require("../models/countryModel");

const getAllCountries = async ({ id, shortname, name }) => {
  console.log(
    "getAll - nombre[" +
      name +
      "] - shortname[" +
      shortname +
      "] - id [" +
      id +
      "]"
  );
  const whereFilter = {};
  const filterAtr = ["name"];

  if (name) {
    whereFilter.name = name;
  }
  console.log("getAll - whereFilter[" + whereFilter + "]");

  const countries = await CountryModel.findAll({
    attributes: filterAtr,
    where: whereFilter,
  });
  //console.log("get user service " + countries);
  return countries;
};

const getById = async (countryId) => {
  console.log("get by id service - countryId[" + countryId + "]");
  const country = await CountryModel.findByPk(countryId, {
    attributes: ["name"],
  });
  console.log("get user service " + country);
  if (!country) {
    throw new error.AppError(exceptions.exceptionType.country.notFound);
  }
  return country;
};

const createPaises = async ({ nombre, poblacion }) => {
  console.log("createPaises - nombre[" + nombre + "]");
  const data = {
    nombre: nombre,
    poblacion: poblacion,
  };
  console.log("createPaises - data[" + JSON.stringify(data) + "]");
  try {
    return await PaisModel.create(data);
  } catch (e) {
    const errorMessage = `createPaises - Detail: ` + e.message;
    console.error("createPaises - nombre[" + nombre + "]");
    throw new error.AppError(
      exceptions.exceptionType.database.entity.canNotBeCreated,
      errorMessage
    );
  }
};

const actualizarPais = async (id, { nombre, poblacion }) => {
  console.log("actualizarPais - id[" + id + "]");
  const data = {
    nombre: nombre,
    poblacion: poblacion,
  };
  console.log("actualizarPais - data[" + JSON.stringify(data) + "]");
  try {
    return await PaisModel.updateById(id, data);
  } catch (e) {
    const errorMessage = `createactualizarPaisPaises - Detail: ` + e.message;
    console.error("actualizarPais - nombre[" + nombre + "]");
    throw new error.AppError(
      exceptions.exceptionType.database.entity.canNotBeUpdated,
      errorMessage
    );
  }
};

module.exports = {
  createPaises,
  getAll,
  getById,
  actualizarPais,
};
