const express = require("express");
const route = express.Router();
const {
  mostrarArticulosAdmin,
  borrarArticulo,
  modificarArticulo,
  crearArticulo,
  renderCrearArticulo,
  renderModificarArticulo,
} = require("../controllers/adminController"); //Controladores
const router = require("./publicRoutes");

route.get("/", mostrarArticulosAdmin);
route.get("/eliminar/:id", borrarArticulo);
route.post("/modificar/:id", modificarArticulo);
route.get("/modificar/:id", renderModificarArticulo);
route.get("/crear", renderCrearArticulo);
route.post("/crear", crearArticulo);

module.exports = route;
