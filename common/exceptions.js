const exceptionType = {
  unhandledException: {
    code: 200,
    message: "Unhandled exception",
    httpStatus: 500,
  },
  notFound: {
    code: 300,
    message: "Not found",
    httpStatus: 404,
  },
  badRequest: {
    code: 400,
    message: "Bad request",
    httpStatus: 400,
  },
  paises: {
    notFound: {
      code: 1000,
      message: "Pais no se encuentra",
      httpStatus: 404,
    },
  },
  productos: {
    notFound: {
      code: 2000,
      message: "Producto no se encuentra",
      httpStatus: 404,
    },
    badRequest: {
      code: 2001,
      message: "faltan parametros obligatorios",
      httpStatus: 400,
    },
  },
  // code of users 100
  users: {
    invalidPassword: {
      code: 100,
      message: "Password did not match",
      httpStatus: 401,
    },
    cannotCreateUser: {
      code: 101,
      message: "User can not be created",
      httpStatus: 500,
    },
    notFound: {
      code: 102,
      message: "User not found",
      httpStatus: 404,
    },
  },
  database: {
    entity: {
      canNotBeCreated: {
        code: 400,
        message: "Can not be create entity",
        httpStatus: 500,
      },
    },
  },
};

module.exports = {
  exceptionType,
};
