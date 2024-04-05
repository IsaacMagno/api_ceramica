const { DataTypes, Model } = require("sequelize");
const sequelize = require("./db.js");

class Product extends Model {}

Product.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
    image: { type: DataTypes.STRING },
    available: { type: DataTypes.BOOLEAN, defaultValue: true },
    description: { type: DataTypes.STRING(255) },
    colors: { type: DataTypes.STRING },
    actualRating: { type: DataTypes.FLOAT },
  },
  {
    sequelize,
    modelName: "Product",
    tableName: "Product",
  }
);

module.exports = Product;
