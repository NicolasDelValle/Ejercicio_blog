const express = require("express");
const route = express.Router();
const { showAllArticles, showArticle } = require("../controllers/articulosControllers");

route.get("/", showAllArticles);
route.get("/articulo/:id", showArticle);

module.exports = route;
