const { User } = require("../models");
const passport = require("passport");

function register(req, res) {
  res.render("register", { user: req.user });
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
  res.render("login", { user: req.user });
}

async function logout(req, res) {
  await req.logout();
  res.redirect("/");
}

module.exports = {
  register,
  storeUser,
  login,
  logout,
};
