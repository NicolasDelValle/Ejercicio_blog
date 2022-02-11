module.exports = (sequelize, Model, DataType) => {
  class Autor extends Model {}

  Autor.init(
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
      modelName: "autor",
    },
  );
  console.log("[DATABASE] CREADA LA TABLA AUTOR");
  return Autor;
};
