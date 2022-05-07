const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Hockey',
  },
  {
    category_name: 'Basketball',
  },
  {
    category_name: 'Soccer',
  },
  {
    category_name: 'Football',
  },
  {
    category_name: 'Baseball',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
