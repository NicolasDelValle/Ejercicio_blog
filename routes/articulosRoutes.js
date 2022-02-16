const express = require("express");
const route = express.Router();
const { showAllArticles, showArticle, storeComments } = require("../controllers/articulosControllers");

route.get("/", showAllArticles);
route.get("/articulo/:id", showArticle);
route.post("/articulo/:id", storeComments);

module.exports = route;
