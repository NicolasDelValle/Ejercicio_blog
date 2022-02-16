require("dotenv").config();

const express = require("express");
const dbInitialSetup = require("./dbInitialSetup");
const routes = require("./routes");
const APP_PORT = process.env.APP_PORT || 3000;
const app = express();
const session = require("express-session");
const passport = require("./passport");
const userGlobally = require("./middlewares/userGlobally")

const SequelizeStore = require("connect-session-sequelize")(session.Store);
const { sequelize } = require("./models");

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    store: new SequelizeStore({
      db: sequelize,
    }),
    resave: false,
    saveUninitialized: false,
  }),
);

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
passport(app);
app.use(userGlobally, routes);

dbInitialSetup();

app.listen(APP_PORT, () => {
  console.log(`[Express] Servidor Corriendo en el puerto: ${APP_PORT}`);
});
