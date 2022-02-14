require("dotenv").config();

const express = require("express");
const dbInitailSetup = require("./dbInitialSetup");
const routes = require("./routes");
const APP_PORT = process.env.APP_PORT || 3000;
const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use(routes);

dbInitailSetup();

app.listen(APP_PORT, () => {
  console.log(`[Express] Servidor Corriendo en el puerto: ${APP_PORT}`);
});
