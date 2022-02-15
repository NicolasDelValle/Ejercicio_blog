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
      contraseña:faker.internet.password(),
      
    });
  }

  await User.bulkCreate(user);
  console.log("[SEEDER] Se corrió el seeder de Autores.");
}
module.exports = seedAutor();
