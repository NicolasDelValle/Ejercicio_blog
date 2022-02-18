const express = require("express");
const route = express.Router();
const {
  mostrarArticulosAdmin,
  borrarArticulo,
  modificarArticulo,
  crearArticulo,
  renderCrearArticulo,
  renderModificarArticulo,
  crearNuevoArticulo,
  guardarArticulo,
  editarArticulo,
  actualizarArticulo,
} = require("../controllers/adminController"); //Controladores

route.get("/", mostrarArticulosAdmin);
route.get("/eliminar/:id", borrarArticulo);
route.post("/modificar/:id", modificarArticulo);
route.get("/modificar/:id", renderModificarArticulo);
// route.get("/crear", renderCrearArticulo);
// route.post("/crear", crearArticulo);
route.get("/crear-articulo", crearNuevoArticulo);
route.post("/crear-articulo", guardarArticulo);
route.get("/editar-articulo/:id", editarArticulo);
route.post("/editar-articulo/:id", actualizarArticulo);

module.exports = route;
