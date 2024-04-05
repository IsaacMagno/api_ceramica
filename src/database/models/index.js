const Authentication = require("./authentication");
const User = require("./user");
const Address = require("./address");
const Order = require("./order");
const OrderItem = require("./orderItem");
const Product = require("./product");
const Category = require("./category");
const Tag = require("./tag");
const DiscountCupom = require("./discountCupom");

// Relações entre as tabelas, conforme especificado anteriormente

// Relação 1:1 entre Authentication e User
Authentication.hasOne(User, {
  foreignKey: "authenticationId",
  as: "user",
});
User.belongsTo(Authentication, {
  foreignKey: "authenticationId",
});

// Relação 1:n entre User e Address
User.hasMany(Address, {
  foreignKey: "userId",
  as: "addresses",
});
Address.belongsTo(User, {
  foreignKey: "userId",
});

// Relação 1:n entre User e Order
User.hasMany(Order, {
  foreignKey: "userId",
  as: "orders",
});
Order.belongsTo(User, {
  foreignKey: "userId",
});

// Relação 1:n entre Order e OrderItem
Order.hasMany(OrderItem, {
  foreignKey: "orderId",
  as: "orderItems",
});
OrderItem.belongsTo(Order, {
  foreignKey: "orderId",
});

// Relação 1:n entre Category e Product
Category.hasMany(Product, {
  foreignKey: "categoryId",
  as: "products",
});
Product.belongsTo(Category, {
  foreignKey: "categoryId",
});

// Relação N:N entre Tag e Product através da tabela ProductTag
Tag.belongsToMany(Product, {
  through: "ProductTag",
  foreignKey: "tagId",
  otherKey: "productId",
  as: "products",
});
Product.belongsToMany(Tag, {
  through: "ProductTag",
  foreignKey: "productId",
  otherKey: "tagId",
  as: "tags",
});

module.exports = {
  Authentication,
  User,
  Address,
  Order,
  OrderItem,
  Product,
  Category,
  Tag,
  DiscountCupom,
};
