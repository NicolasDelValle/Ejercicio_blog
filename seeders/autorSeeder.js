const { faker } = require("@faker-js/faker");
const { Autor } = require("../models");
faker.locale = "es";
console.log("[SEEDER] REQUIERE LISTOS");

async function seedAutor() {
  const autor = [];
  for (let i = 0; i < 10; i++) {
    autor.push({
      nombre: faker.name.firstName(),
      apellido: faker.name.firstName(),
      email: faker.internet.email(),
    });
  }

  await Autor.bulkCreate(autor);
  console.log("[SEEDER] Se corrió el seeder de Autores.");
}
module.exports = seedAutor();
