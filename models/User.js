const bcrypt = require("bcryptjs");

module.exports = (sequelize, Model, DataType) => {
  class User extends Model {}

  User.init(
    {
      id: {
        type: DataType.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: DataType.STRING,
      apellido: DataType.STRING,
      email: {
        type: DataType.STRING,
        validate: {
          isEmail: true,
        },
      },
      password: DataType.STRING,
    },
    {
      sequelize,
      modelName: "user",
      timestamps: true,
    },
  );
  console.log("[DATABASE] CREADA LA TABLA USER");
  return User;
};
