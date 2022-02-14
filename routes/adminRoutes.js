const express = require("express");

const route = express.Router();

const {
  showAdmin,
  deleteArticle,
  updateArticle,
  createArticle,
  getCreateArticle,
} = require("../controllers/adminController"); //Controladores

route.get("/", showAdmin);
route.get("/eliminar/:id", deleteArticle);
route.post("/modificar/:id", updateArticle);
route.get("/crear", getCreateArticle);
route.post("/crear", createArticle);

module.exports = route;
