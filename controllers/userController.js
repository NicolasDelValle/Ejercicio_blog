const {User} = require("../models");


async function register(req, res) {
    const Articulos = await Articulo.findAll();
    res.render("admin", { Articulos });
  }