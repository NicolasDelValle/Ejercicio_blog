module.exports = (sequelize, Model, DataType) => {
  class Rol extends Model {}

  Rol.init(
    {
      id: {
        type: DataType.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: DataType.STRING,
    },
    {
      sequelize,
      modelName: "role",
      timestamp: false,
      createdAt: false,
      updatedAt: false,
    },
  );
  console.log("[DATABASE] CREADA LA TABLA ROL");
  return Rol;
};
