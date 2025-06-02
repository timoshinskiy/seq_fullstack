const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    username: {type: DataTypes.STRING, unique: true, allowNull:false},
    email: {type: DataTypes.STRING, unique: true, allowNull: false},
    password: {type: DataTypes.STRING, allowNull: false},
    role: {type: DataTypes.STRING, defaultValue:"USER"},
    wallet: {type: DataTypes.INTEGER, defaultValue: 0},
    uid:{type:DataTypes.STRING,allowNull:false,defaultValue:''},
    email_verified:{type:DataTypes.BOOLEAN,allowNull:false,defaultValue:false},
})

const Basket = sequelize.define('basket' , {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    amount: {type: DataTypes.INTEGER, defaultValue: 0}
})

const BasketProduct = sequelize.define('basketProduct' , {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})
const Product = sequelize.define('product', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    product_name: {type: DataTypes.STRING, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    picture: {type: DataTypes.STRING,allowNull:false},
    short_desc: {type: DataTypes.STRING, allowNull: true},
    full_desc: {type: DataTypes.STRING, allowNull: true},
    ordered: {type: DataTypes.BOOLEAN, allowNull:false, defaultValue: false},
    buyed: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false},
    buyer: {type: DataTypes.STRING, allowNull: true},
})

User.hasOne(Basket);
Basket.belongsTo(User);

Basket.hasOne(User);
User.belongsTo(Basket);

Basket.hasMany(BasketProduct);
BasketProduct.belongsTo(Basket);

BasketProduct.hasOne(Product);
Product.belongsTo(BasketProduct);

Product.hasOne(BasketProduct);
BasketProduct.belongsTo(Product);

User.hasMany(Product);
Product.belongsTo(User);

module.exports = {
    User,
    Basket,
    Product,
    BasketProduct,
}