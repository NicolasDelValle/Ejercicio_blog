const { Rol } = require("../models");

async function roles() {
  const roles = [
    {
      nombre: "administrador",
    },
    {
      nombre: "editor",
    },
    {
      nombre: "escritor",
    },
    {
      nombre: "lector",
    },
  ];

  await Rol.bulkCreate(roles);
  console.log("[SEEDER] Se corrió el seeder de Roles.");
}

module.exports = roles();
