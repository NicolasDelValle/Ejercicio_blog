const { Roles } = require("../models");

async function seedRoles() {
  const rol = [{ name: "Lector" }, { name: "Escritor" }, { name: "Editor" }, { name: "Admin" }];
  await Roles.bulkCreate(rol);
  console.log("[SEEDER] Se corrió el seeder de Rol.");
}
module.exports = seedRoles();
