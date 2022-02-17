const { faker } = require("@faker-js/faker");
const { User } = require("../models");
faker.locale = "es";
console.log("[SEEDER] REQUIERE LISTOS");

async function seedAutor() {
  const user = [];
  for (let i = 0; i < 10; i++) {
    user.push({
      nombre: faker.name.firstName(),
      apellido: faker.name.firstName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      roleId: Math.ceil(Math.random() * 4),
    });
  }
  user.push({
    nombre: "lector",
    apellido: "lector",
    email: "lector@1.com",
    password: "123",
    roleId: 4,
  });
  user.push({
    nombre: "escritor",
    apellido: "escritor",
    email: "escritor@1.com",
    password: "123",
    roleId: 3,
  });
  user.push({
    nombre: "editor",
    apellido: "editor",
    email: "editor@1.com",
    password: "123",
    roleId: 2,
  });
  user.push({
    nombre: "admin",
    apellido: "admin",
    email: "admin@1.com",
    password: "123",
    roleId: 1,
  });

  await User.bulkCreate(user);
  console.log("[SEEDER] Se corrió el seeder de Autores.");
}
module.exports = seedAutor();
