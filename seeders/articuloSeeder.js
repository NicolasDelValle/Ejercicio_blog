const { faker } = require("@faker-js/faker");
const { Articulo } = require("../models");
faker.locale = "es";
console.log("[SEEDER] REQUIERE LISTOS");

async function seedArticulos() {
  const articulos = [];
  for (let i = 0; i < 10; i++) {
    articulos.push({
      titulo: faker.name.firstName(),
      contenido: faker.lorem.paragraph(),
      imagen: faker.image.avatar(),
      fechaDeCreacion: faker.date.past(),
    });
  }

  await Articulo.bulkCreate(articulos);
  console.log("[SEEDER] Se corrió el seeder de Articulos.");
}
module.exports = seedArticulos();
