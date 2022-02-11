const { Articulo } = require("../models");

async function showAllArticles(req, res) {
  const articles = await Articulo.findAll();
  console.log(articles);
  res.render("home", { articles });
}

module.exports = {
  showAllArticles,
};
  