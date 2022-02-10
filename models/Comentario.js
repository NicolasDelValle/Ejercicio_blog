module.exports = (sequelize, Model, DataType) => {
  class Comentario extends Model {}

  Comentario.init(
    {
      id: {
        type: DataType.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      contenido: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: true,
        },
      },
      nombre: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "comentario",
    },
  );

  return Comentario;
};
