const bcrypt = require("bcryptjs");

module.exports = (sequelize, Model, DataType) => {
  class User extends Model {
    async validPassword(password) {
      return await bcrypt.compare(password, this.password);
    }
  }

  User.init(
    {
      id: {
        type: DataType.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      firstname: DataType.STRING,
      lastname: DataType.STRING,
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
      timestamps: false,
      createdAt: false,
      updatedAt: false,
    },
  );

  User.beforeCreate(async (user, options) => {
    user.password = await bcrypt.hash(user.password, 7);
  });

  console.log("[DATABASE] CREADA LA TABLA USER");
  return User;
};
