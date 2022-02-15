const express = require("express");
const route = express.Router();
const articulosRutas = require("./articulosRoutes");
const adminRutas = require("./adminRoutes");
const rutasPublicas = require("./publicRoutes")

route.use(rutasPublicas)
route.use(articulosRutas);
route.use("/admin", adminRutas);

module.exports = route;
