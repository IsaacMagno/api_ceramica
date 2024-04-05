const { DataTypes, Model } = require("sequelize");
const sequelize = require("./db.js");

class OrderItem extends Model {}

OrderItem.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    quantity: { type: DataTypes.INTEGER, allowNull: false },
  },
  {
    sequelize,
    modelName: "OrderItem",
    tableName: "OrderItem",
  }
);

module.exports = OrderItem;
