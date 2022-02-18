const { Articulo, User } = require("../models");
const formidable = require("formidable");

async function showMyArticles(req, res) {
  const articles = await Articulo.findAll({ where: { userId: req.user.id } });
  res.render("dashboard", { articles, role: "writer", user: req.user });
}

async function borrarArticulo(req, res) {
  const { id } = req.params;
  await Articulo.destroy({ where: { id: id } });
  res.redirect("/writer");
}

async function renderModificarArticulo(req, res) {
  res.render("modificar", { user: req.user });
}

async function modificarArticulo(req, res) {
  const { id } = req.params;
  const { titulo, contenido, imagen } = req.body;
  await Articulo.update({ contenido, titulo, imagen }, { where: { id: id } });
  res.redirect("/writer");
}
async function renderCrearArticulo(req, res) {
  res.render("crear", { user: req.user });
}
async function crearArticulo(req, res) {
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

    const autores = await User.findOne({
      where: {
        email,
      },
    });
    if (autores === null) {
      await User.create({
        nombre,
        apellido,
        email,
      });
      const { id } = await User.findOne({
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
      const { id } = await User.findOne({
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
    res.redirect("/writer");
  });
}
function crearNuevoArticulo(req, res) {
  res.render("crear-articulo", { user: req.user });
}
async function guardarArticulo(req, res) {
  const articulo = req.body;
  await Articulo.create({
    titulo: articulo.titulo,
    contenido: articulo.contenido,
    imagen: articulo.imagen,
    userId: req.user.id,
  });
  res.redirect("/");
}

async function editarArticulo(req, res) {
  const articulo = await Articulo.findByPk(req.params.id, { include: { all: true, nested: true } });
  res.render("editar-articulo", { articulo });
}
async function actualizarArticulo(req, res) {
  const actualizacion = req.body;
  await Articulo.update(
    {
      titulo: actualizacion.titulo,
      contenido: actualizacion.contenido,
    },
    { where: { id: req.params.id } },
  );

  res.redirect("/");
}

module.exports = {
  showMyArticles,
  borrarArticulo,
  modificarArticulo,
  crearArticulo,
  renderCrearArticulo,
  renderModificarArticulo,
  crearNuevoArticulo,
  guardarArticulo,
  editarArticulo,
  actualizarArticulo,
};
