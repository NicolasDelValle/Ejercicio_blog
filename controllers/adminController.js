const { Articulo, Autor } = require("../models");

async function showAdmin(req, res) {
  const Articulos = await Articulo.findAll();
  res.json(Articulos);
  //res.render("admin", { Articulos });
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
async function createArticle(req, res) {
  const { nombre, apellido, email, titulo, contenido, imagen } = req.body;
  const autores = await Autor.findOne({
    where: {
      email,
    },
  });
  if (autores === null) {
    await Autor.create({
      nombre,
      apellido,
      email,
    });
    const { id } = await Autor.findOne({
      where: {
        email,
      },
    });
    Articulo.create({
      titulo,
      contenido,
      imagen,
      autorId: id,
    });
  } else {
    const { id } = await Autor.findOne({
      where: {
        email,
      },
    });
    Articulo.create({
      titulo,
      contenido,
      imagen,
      autorId: id,
    });
  }
  console.log(autores);
  res.redirect("/admin");
}

module.exports = {
  showAdmin,
  deleteArticle,
  updateArticle,
  createArticle,
};
