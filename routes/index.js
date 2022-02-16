const express = require("express");
const route = express.Router();
const articulosRutas = require("./articulosRoutes");
const adminRutas = require("./adminRoutes");
const rutasPublicas = require("./publicRoutes")
const { myAuthenticate } = require("../middlewares/authenticate")

route.use(rutasPublicas)
route.use(articulosRutas);
route.use("/admin", myAuthenticate, adminRutas);

module.exports = route;
