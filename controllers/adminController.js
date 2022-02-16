const { Articulo, User } = require("../models");
const formidable = require("formidable");

async function mostrarArticulosAdmin(req, res) {
  const articulos = await Articulo.findAll();
  res.render("admin", { articulos });
}

async function borrarArticulo(req, res) {
  const { id } = req.params;
  await Articulo.destroy({ where: { id: id } });
  res.redirect("/admin");
}

async function renderModificarArticulo(req, res) {
  res.render("modificar");
}

async function modificarArticulo(req, res) {
  const { id } = req.params;
  const { titulo, contenido, imagen } = req.body;
  await Articulo.update({ contenido, titulo, imagen }, { where: { id: id } });
  res.redirect("/admin");
}
async function renderCrearArticulo(req, res) {
  res.render("crear");
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
    res.redirect("/admin");
  });
}

module.exports = {
  mostrarArticulosAdmin,
  borrarArticulo,
  modificarArticulo,
  crearArticulo,
  renderCrearArticulo,
  renderModificarArticulo,
};
