const { Articulo, User, Comentario } = require("../models");

async function showAllArticles(req, res) {
  const articulos = await Articulo.findAll();
  //console.log(Articulos);
  const user = req.user
  res.render("home", { articulos, user });
}

async function showArticle(req, res) {
  const { id } = req.params;
  //console.log(id);
  
  const articulo = await Articulo.findByPk(req.params.id, { include: { all: true, nested: true } });
  //res.json(articulo);
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
