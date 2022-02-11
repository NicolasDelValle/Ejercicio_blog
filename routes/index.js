const express = require("express");
const route = express.Router();
const articulosRutas = require("./articulosRoutes");

route.use(articulosRutas);

module.exports = route;
