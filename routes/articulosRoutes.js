const express = require("express");
const route = express.Router();
<<<<<<< Updated upstream
const { showAllArticles } = require("../controllers/articulosControllers");
=======
const { showAllArticles, showArticle } = require("../controllers/articulosControllers");
>>>>>>> Stashed changes

route.get("/", showAllArticles);

route.get("/articulo/:id", showArticle);

module.exports = route;
