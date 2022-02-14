const { faker } = require("@faker-js/faker");
const { Comentario } = require("../models");
faker.locale = "es";
console.log("[SEEDER] REQUIERE LISTOS");

async function seedComentario() {
  const comentario = [];
  for (let i = 0; i < 10; i++) {
    comentario.push({
      contenido: faker.lorem.paragraph(),
      email: faker.internet.email(),
      nombre: faker.name.firstName(),
    });
  }

  await Comentario.bulkCreate(comentario);
  console.log("[SEEDER] Se corrió el seeder de Autores.");
}
module.exports = seedComentario();