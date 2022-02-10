module.exports = (sequelize, Model, DataType) => {
  class Autor extends Model {}

  Autor.init(
    {
      id: {
        type: DataType.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: DataTypes.STRING,
      apellido: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: true,
        },
      },
    },
    {
      sequelize,
      modelName: "autor",
    },
  );

  return Autor;
};
