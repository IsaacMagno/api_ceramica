const { DataTypes, Model } = require("sequelize");
const sequelize = require("./db.js");

class DiscountCupom extends Model {}

DiscountCupom.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    discountPercentage: { type: DataTypes.INTEGER, allowNull: false },
    activated: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    sequelize,
    modelName: "DiscountCupom",
    tableName: "DiscountCupom",
  }
);

module.exports = DiscountCupom;
