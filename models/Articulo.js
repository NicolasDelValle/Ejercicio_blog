module.exports = (sequelize, Model, DataType) => {
  class Articulo extends Model {}

  Articulo.init(
    {
      id: {
        type: DataType.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      titulo: DataType.STRING,
      contenido: DataType.STRING,
      imagen: {
        type: DataType.STRING,
        validate: {
          isUrl: true,
        },
      },
      fechaDeCreacion: DataType.DATE,
    },
    {
      sequelize,
      modelName: "articulo",
    },
  );
  console.log("[DATABASE] CREADA LA TABLA ARTICULO");
  return Articulo;
};
