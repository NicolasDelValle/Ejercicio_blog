const { Rol } = require("../models");
async function isLector(req, res, next) {
  const { roleId } = req.user;
  const { nombre } = await Rol.findByPk(roleId);
  nombre.toLowerCase();
  if (nombre !== "lector") {
    return next();
  } else {
    res.redirect("/");
  }
}
module.exports = isLector;
