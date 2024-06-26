const { DataTypes, Model } = require("sequelize");
const sequelize = require("./db.js");

class Order extends Model {}

Order.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    status: { type: DataTypes.STRING, allowNull: false },
  },
  {
    sequelize,
    modelName: "Order",
    tableName: "Order",
  }
);

module.exports = Order;
