const { sequelize } = require(".");

module.exports = (sequelize, Model, DataType) => {
  class Roles extends Model {}

  Roles.init(
    {
      id: {
        type: DataType.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      name: DataType.STRING,
    },
    {
      sequelize,
      modelName: "roles",
      timestamps: false,
      createdAt: false,
      updatedAt: false,
    },
  );
  console.log("[DATABASE] CREADA LA TABLA ROLES");
  return Roles;
};
