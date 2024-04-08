const { DataTypes, Model } = require("sequelize");
const sequelize = require("./db.js");

class Authentication extends Model {}

Authentication.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    password: DataTypes.STRING,
    lastLogin: DataTypes.DATE,
  },
  {
    sequelize,
    tableName: "Authentication",
  }
);

module.exports = Authentication;
