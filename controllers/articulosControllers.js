const { Articulo, User, Comentario } = require("../models");

async function showAllArticles(req, res) {
  const articulos = await Articulo.findAll();
  res.render("home", { articulos });
}

async function showArticle(req, res) {
  const articulo = await Articulo.findByPk(req.params.id, { include: { all: true, nested: true } });
  res.render("articulo", { articulo });
}
async function storeComments(req, res) {
  const text = req.body;
  await Comentario.create({
    contenido: text.comment,
    userId: req.user.id,
    articuloId: req.params.id,
  });
  res.redirect(`/articulo/${req.params.id}`);
}
module.exports = {
  showAllArticles,
  showArticle,
  storeComments,
};
