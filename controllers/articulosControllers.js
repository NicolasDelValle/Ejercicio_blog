const { Articulo, Autor, Comentario } = require("../models");

async function showAllArticles(req, res) {
  const Articulos = await Articulo.findAll();
  //console.log(Articulos);
  res.render("home", { Articulos });
}

async function showArticle(req, res) {
  const { id } = req.params;
  //console.log(id);

  const articulo = await Articulo.findAll({include : [Autor, Comentario], where : {id : id}});

  console.log(articulo[0].autor.nombre);

  //res.json(articulo);

  res.render("articulo", { articulo });
}

module.exports = {
  showAllArticles,
  showArticle,
};
