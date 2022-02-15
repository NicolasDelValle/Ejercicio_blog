const { Articulo, Autor } = require("../models");
const formidable = require("formidable");

async function showAdmin(req, res) {
  const Articulos = await Articulo.findAll();
  res.render("admin", { Articulos });
}

async function deleteArticle(req, res) {
  const { id } = req.params;
  await Articulo.destroy({ where: { id: id } });
  res.redirect("/admin");
}

async function renderUpdateArticle(req, res) {
  res.render("modificar");
}

async function updateArticle(req, res) {
  const { id } = req.params;
  const { titulo, contenido, imagen } = req.body;
  await Articulo.update({ contenido, titulo, imagen }, { where: { id: id } });
  res.redirect("/admin");
}
async function renderCreateArticle(req, res) {
  res.render("crear");
}
async function createArticle(req, res) {
  const form = formidable({
    multiples: false,
    uploadDir: __dirname + "/../public/assets",
    keepExtensions: true,
  });
  form.parse(req, async (err, fields, files) => {
    const { nombre, apellido, email, titulo, contenido } = fields;
    console.log(files);
    console.log("___________");
    console.log(fields);
    console.log("___________");
    console.log(`${apellido} ${nombre} ${email} ${titulo} ${files} ${contenido}`);

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
    res.redirect("/admin");
  });
}

module.exports = {
  showAdmin,
  deleteArticle,
  updateArticle,
  createArticle,
  renderCreateArticle,
  renderUpdateArticle,
};
