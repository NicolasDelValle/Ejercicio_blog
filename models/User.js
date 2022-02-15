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
    },
    {
      sequelize,
      modelName: "User",
      timestamps: true,
    },
  );
  console.log("[DATABASE] CREADA LA TABLA USER");
  return User;
};