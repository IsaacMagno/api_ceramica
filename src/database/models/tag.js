const { DataTypes, Model } = require("sequelize");
const sequelize = require("./db.js");

class Tag extends Model {}

Tag.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
  },
  {
    sequelize,
    modelName: "Tag",
    tableName: "Tag",
  }
);

module.exports = Tag;
