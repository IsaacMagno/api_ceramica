const { DataTypes, Model } = require("sequelize");
const sequelize = require("./db.js");

class User extends Model {}

User.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    role: DataTypes.STRING,
  },
  {
    sequelize,
    tableName: "User",
  }
);

module.exports = User;
