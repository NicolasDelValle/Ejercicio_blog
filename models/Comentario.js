module.exports = (sequelize, Model, DataType) => {
  class Comentario extends Model {}

  Comentario.init(
    {
      id: {
        type: DataType.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      contenido: DataType.STRING(900),
      email: {
        type: DataType.STRING,
        validate: {
          isEmail: true,
        },
      },
      nombre: DataType.STRING,
    },
    {
      sequelize,
      modelName: "comentario",
      timestamps: true,
    },
  );
  console.log("[DATABASE] CREADA LA TABLA COMENTARIO");
  return Comentario;
};
