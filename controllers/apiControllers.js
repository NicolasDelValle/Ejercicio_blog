const { faker } = require("@faker-js/faker");
const { Articulo, User, Comentario } = require("../models");
faker.locale = "es";
async function showArticles(req, res) {
  try {
    const article = await Articulo.findAll({ include: { all: true, nested: true } });
    console.log(article);
    res.json(article);
  } catch (error) {
    res.end("No Funciona :( >>>>>>>> " + error);
  }
}

async function showSingleArticle(req, res) {
  try {
    const { id } = req.params;
    const article = await Articulo.findByPk(id, {
      include: { all: true },
    });
    res.json(article);
  } catch (error) {
    res.end("No Funciona :( >>>>>>>> " + error);
  }
}

async function createArticle(req, res) {
  const { titulo, contenido, imagen, userId } = req.body;
  await Articulo.create({
    titulo,
    contenido,
    imagen,
    fechaDeCreacion: faker.date.past(),
    userId,
  });
  res.redirect("/api/articles");
}

async function deleteArticle(req, res) {
  const { id } = req.params;
  await Articulo.destroy({ where: { id: id } });
  res.redirect("/api/articles");
}
module.exports = { showArticles, showSingleArticle, createArticle, deleteArticle };
