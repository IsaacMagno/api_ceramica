const { DataTypes, Model } = require("sequelize");
const sequelize = require("./db.js");

class Address extends Model {}

Address.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    street: DataTypes.STRING(255),
    houseNumber: DataTypes.STRING(10),
    complement: DataTypes.STRING(255),
    neighborhood: DataTypes.STRING(100),
    city: DataTypes.STRING(100),
    state: DataTypes.STRING(100),
    cep: DataTypes.STRING(10),
  },
  {
    sequelize,
    modelName: "Address",
    tableName: "Address",
  }
);

module.exports = Address;
