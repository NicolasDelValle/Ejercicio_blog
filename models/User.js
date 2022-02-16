const bcrypt = require("bcryptjs");

module.exports = (sequelize, Model, DataType) => {
  class User extends Model {}

  // sequelize.addHook("beforeCreate", async(user) => {
  //   const hashedPassword = await bcrypt.hash(user.password, 8);
  //   user.password = hashedPassword;
  // });

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

  User.beforeCreate(async (user, options) => {
    const hashedPassword = await bcrypt.hash(user.password, 8);
    user.password = hashedPassword;
  });

  console.log("[DATABASE] CREADA LA TABLA USER");
  return User;
};

// beforeBulkCreate(instances, options)
