const { faker } = require("@faker-js/faker");
const { Articulo } = require("../models");
faker.locale = "es";
console.log("[SEEDER] REQUIERE LISTOS");

async function seedArticulos() {
  const articulos = [];
  for (let i = 0; i < 10; i++) {
    articulos.push({
      titulo: faker.name.firstName(),
      contenido: faker.name.firstName(),
      imagen: faker.image.avatar(),
      fechaDeCreacion: faker.date.past(),
      autorId: faker.datatype.number(10),
    });
  }

  await Articulo.bulkCreate(articulos);
  console.log("[SEEDER] Se corrió el seeder de Articulos.");
}
module.exports = seedArticulos();
