const express = require("express");
const route = express.Router();
const articulosRutas = require("./articulosRoutes");
const adminRutas = require("./adminRoutes");

route.use(articulosRutas);
route.use(adminRutas);

module.exports = route;
