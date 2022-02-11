const express = require("express");
const route = express.Router();
const { showAllArticles } = require("../controllers/articulosControllers");

route.get("/", showAllArticles);

route.get("/articulo/:id", (req, res) => {
  res.render("articulo", { articulo });
});

module.exports = route;
