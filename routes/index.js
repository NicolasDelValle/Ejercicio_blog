const express = require("express");
const route = express.Router();
const articulosRutas = require("./articulosRoutes");
const adminRutas = require("./adminRoutes");
const rutasPublicas = require("./publicRoutes");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");
const isLector = require("../middlewares/isLector");

route.use(rutasPublicas);
route.use(articulosRutas);
route.use("/admin", ensureAuthenticated, isLector, adminRutas);

module.exports = route;
