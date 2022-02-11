const { Articulo } = require("../models");

async function showAllArticles(req, res) {
  const articles = await Articulo.findAll();
<<<<<<< Updated upstream
  console.log(articles);
=======
  console.log("Entré a Home");
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
=======
  showArticle,
>>>>>>> Stashed changes
};
  