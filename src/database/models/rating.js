const { DataTypes, Model } = require("sequelize");
const sequelize = require("./db.js");

class Rating extends Model {}

Rating.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    description: { type: DataTypes.STRING(255) },
    rating: { type: DataTypes.INTEGER, allowNull: false },
  },
  {
    sequelize,
    modelName: "Rating",
    tableName: "Rating",
  }
);

module.exports = Rating;
