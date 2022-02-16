const { Articulo, User, Comentario } = require("../models");

async function showAllArticles(req, res) {
  const Articulos = await Articulo.findAll();
  //console.log(Articulos);
  const user = req.user
  res.render("home", { Articulos, user });
}

async function showArticle(req, res) {
  const { id } = req.params;
  //console.log(id);

  const articulo = await Articulo.findAll({ include: [User, Comentario], where: { id: id } });

  //res.json(articulo);
  res.render("articulo", { articulo });
}

module.exports = {
  showAllArticles,
  showArticle,
};
