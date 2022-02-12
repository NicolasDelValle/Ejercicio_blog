const { Articulo } = require("../models");

async function showAllArticles(req, res) {
  const Articulos = await Articulo.findAll();
  console.log("[USUARIO]Entro al home y existen : ( " + Articulos.length + " ) usuarios");
  res.render("home", { Articulos });
}

async function showArticle(req, res) {
  const { id } = req.params;

  const article = await Articulo.findByPk(id);

  console.log("[USUARIO]Entró a un artículo");

  res.render("articulo", { article });
}

module.exports = {
  showAllArticles,
  showArticle,
};
