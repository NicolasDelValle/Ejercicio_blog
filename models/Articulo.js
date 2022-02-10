const { ValidationError } = require("sequelize/types");

module.exports = (sequelize, Model, DataType) => {
  class Articulo extends Model {}

  Articulo.init(
    {
      id: {
        type: DataType.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      titulo: DataTypes.STRING,
      contenido: DataTypes.STRING,
      imagen: {
        type: DataTypes.STRING,
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

  return Articulo;
};
