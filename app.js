const express = require("express");
const router = express.Router();
const app = express();
const passport = require("passport");
const passportConfig = require("./config/server/passportConfig");
const config = require("config");
const apiPrefix = config.get("apiPrefix");

const bodyParser = require("body-parser");

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

// Configurar cabeceras y cors
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use(apiPrefix + "/users", require("./routes/user.route"));
app.use(apiPrefix + "/auth", require("./routes/auth.route"));
app.use(apiPrefix + "/countries", require("./routes/countries.route"));
app.use(apiPrefix + "/cities", require("./routes/cities.route"));

app.use(
  apiPrefix + "/memorandum/received",
  require("./routes/memorandumRec.route")
);
app.use(
  apiPrefix + "/memorandum/sent",
  require("./routes/memorandumSent.route")
);

// add router in the Express app.
app.use("/", router);

// pass passport for configuration
passport.use(passportConfig.createStrategy());
app.use(passport.initialize());

app.listen(3000, () => {
  console.log("Started on PORT 3000");
});
