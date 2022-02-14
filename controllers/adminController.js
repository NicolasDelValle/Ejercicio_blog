const { Articulo } = require("../models");

async function showAdmin(req, res) {
  const articulos = await Articulo.findAll();
  res.render("admin", { articulos });
}

async function deleteArticle(req, res) {
  const { id } = req.params;
  await Articulo.destroy({ where: { id: id } });
  res.redirect("/admin");
}

async function updateArticle(req, res) {
  const { id } = req.params;
  const { titulo, contenido, imagen } = req.body;
  await Articulo.update({ contenido, titulo, imagen }, { where: { id: id } });
  res.redirect("/admin");
}

module.exports = {
  showAdmin,
  deleteArticle,
  updateArticle,
};
