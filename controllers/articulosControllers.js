const { Articulo } = require("../models");

async function showAllArticles(req, res) {
  const articles = await Articulo.findAll();
  console.log(articles);
  res.render("home", { articles });
}

async function showArticle(req, res) {
  const {id} = req.params;

  const article = await Articulo.findByPk(id);

  console.log("Entró a un artículo");

  res.render('articulo', {article})
}


module.exports = {
  showAllArticles,
  showArticle,
};
  