const { faker } = require("@faker-js/faker");
const { Comentario } = require("../models");
faker.locale = "es";
console.log("[SEEDER] REQUIERE LISTOS");

async function seedComentario() {
  const comentario = [];
  for (let i = 0; i < 10; i++) {
    comentario.push({
      contenido: faker.lorem.paragraph(),
      // email: faker.internet.email(),
      // nombre: faker.name.firstName(),
      userId: faker.datatype.number({ min: 1, max: 10 }),
      articuloId: faker.datatype.number({ min: 1, max: 10 }),
    });
  }

  await Comentario.bulkCreate(comentario);
  console.log("[SEEDER] Se corrió el seeder de Comentarios.");
}
module.exports = seedComentario();
