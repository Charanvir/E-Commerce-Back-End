// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
// A product can only belong to a single category
Product.belongsTo(Category, {
  foreignKey: 'category_id'
})
// Categories have many Products
// A category can have multiple products
Category.hasMany(Product, {
  foreignKey: 'category_id'
})
// Products belongToMany Tags (through ProductTag)
// by using the ProductTag class, we are connecting Product and Tag together and referncing the foreign key
Product.belongsToMany(Tag, {
  through: ProductTag,
  // unqiue key defined which will be used in the endpoint functions to reference this association
  as: 'tags',
  foreignKey: 'product_id'
})
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  // unqiue key defined which will be used in the endpoint functions to reference this association
  as: 'products',
  foreignKey: 'tag_id'
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
