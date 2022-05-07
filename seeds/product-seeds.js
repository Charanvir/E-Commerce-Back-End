const { Product } = require('../models');

const productData = [
  {
    product_name: 'Hockey Stick',
    price: 99.99,
    stock: 14,
    category_id: 1,
  },
  {
    product_name: 'Hockey Net',
    price: 149.99,
    stock: 14,
    category_id: 1,
  },
  {
    product_name: 'Baseball Bat',
    price: 49.99,
    stock: 25,
    category_id: 5,
  },
  {
    product_name: 'Football Cleats',
    price: 39.99,
    stock: 12,
    category_id: 4,
  },
  {
    product_name: 'Soccer Cleats',
    price: 99.99,
    stock: 50,
    category_id: 3,
  },
  {
    product_name: 'Basketball Net',
    price: 249.99,
    stock: 22,
    category_id: 2,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
