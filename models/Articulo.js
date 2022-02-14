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
      contenido: DataType.STRING(900),
      imagen: DataType.STRING,
      fechaDeCreacion: DataType.DATE,
    },
    {
      sequelize,
      modelName: "articulo",
      timestamps: true,
    },
  );
  console.log("[DATABASE] CREADA LA TABLA ARTICULO");
  return Articulo;
};
