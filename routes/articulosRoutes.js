const express = require("express");
const route = express.Router();
//require controllers
const {
  showAllArticles,
  showArticle,
  storeComments,
} = require("../controllers/articulosControllers");
//require middlewares
const userIsLogged = require("../middlewares/userIsLogged");

route.get("/", showAllArticles);
route.get("/articulo/:id", userIsLogged, showArticle);
route.post("/articulo/:id", userIsLogged, storeComments);

module.exports = route;
