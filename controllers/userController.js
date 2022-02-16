const { User } = require("../models");
const passport = require("passport")

function register(req, res) {
  res.render("register");
}

async function storeUser(req, res) {
  const usuarioData = req.body;
  await User.create({
    nombre: usuarioData.name,
    apellido: usuarioData.lastname,
    email: usuarioData.email,
    password: usuarioData.password,
  });
  res.redirect("/");
}

function login(req, res) {
  res.render("login");
}

function logout(req, res) {
  req.logout();
  res.redirect('/');
}

module.exports = {
  register,
  storeUser,
  login,
  logout,
};
