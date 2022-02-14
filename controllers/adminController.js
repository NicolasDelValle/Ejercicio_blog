const { Articulo } = require("../models");

async function showAdmin(req, res) {
  const Articulos = await Articulo.findAll();
  res.render("admin", { Articulos });
}

async function deleteArticle(req, res) {
  const { id } = req.params;

  await Articulo.destroy({ where: { id: id } });

  res.redirect("/admin");
}

async function updateArticle(req, res) {
  const { id } = req.params;
  const { titulo, contenido, imagen } = req.body; //Undefined
  console.log("este es el body que recibo ", req.body);

  await Articulo.update({ contenido: "prueba" }, { where: { id: id } });

  res.redirect("/admin");
}

module.exports = {
  showAdmin,
  deleteArticle,
  updateArticle,
};
