const express = require("express");
const route = express.Router();
const { showAllArticles, showArticle, storeComments } = require("../controllers/articulosControllers");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

route.get("/", showAllArticles);
route.get("/articulo/:id", showArticle);
route.post("/articulo/:id",ensureAuthenticated, storeComments);

module.exports = route;
