const express = require("express");

const route = express.Router();

const { showAdmin, deleteArticle, updateArticle } = require("../controllers/adminController"); //Controladores

route.get("/admin", showAdmin);
route.get("/admin/eliminar/:id", deleteArticle);
route.post("/admin/modificar/:id", updateArticle);

route.get("/admin/crear/:id", (req, res) => {
  const { id } = req.params;

  res.redirect("/crear");
});

module.exports = route;
