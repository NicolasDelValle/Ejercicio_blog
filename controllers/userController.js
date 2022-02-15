const {User} = require("../models");


function register(req, res) {
    res.render("register");
  }
  async function storeUser(req, res) {
   const usuarioData = req.body
    await User.create(
      {
        nombre: usuarioData.nombre,
        apellido: usuarioData.apellido,
        email: usuarioData.email,
        contraseña: usuarioData.contraseña,
      },
    );
    res.redirect("/")
  }
  function login(req, res) {
    res.render("login")
  }
  
  module.exports = {
    register,
    storeUser,
    login,
  }