const express = require("express");
const route = express.Router();
const { showArticles } = require("../controllers/articulosControllers");

route.get("/", showArticles);

route.get("/articulo/:id", (req, res) => {
  res.render("articulo", { articulo });
});

module.exports = route;
