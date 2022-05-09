const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

// allows the new Category class to use the methods from the required Model from sequelize
class Category extends Model { }

// create the Category class 
Category.init(
  {
    id: {
      // specifying that the id is an INTEGER
      type: DataTypes.INTEGER,
      // it is the primary key for this table and is used in references with other tables
      primaryKey: true,
      // will increase automatically for each new category created
      autoIncrement: true,
      // cannot be false
      allowNull: false
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
