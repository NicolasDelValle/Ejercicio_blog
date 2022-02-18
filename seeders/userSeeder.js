const { faker } = require("@faker-js/faker");
const { User } = require("../models");
faker.locale = "es";
console.log("[SEEDER] REQUIERE LISTOS");

async function seedAutor() {
  for (let i = 1; i < 5; i++) {
    await User.create({
      firstname: faker.name.firstName(),
      lastname: faker.name.firstName(),
      email: `user${i}@user.com`,
      password: "123",
      roleId: i,
    });
    if (i === 2) {
      await User.create({
        firstname: faker.name.firstName(),
        lastname: faker.name.firstName(),
        email: `esc${i}@user.com`,
        password: "123",
        roleId: i,
      });
    }
  }

  console.log("[SEEDER] Se corrió el seeder de Autores.");
}
module.exports = seedAutor();
