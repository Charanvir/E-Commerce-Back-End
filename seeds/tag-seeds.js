const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'shoewear',
  },
  {
    tag_name: 'equipment',
  },
  {
    tag_name: 'black',
  },
  {
    tag_name: 'red',
  },
  {
    tag_name: 'green',
  },
  {
    tag_name: 'white',
  },
  {
    tag_name: 'blue',
  },
  {
    tag_name: 'net',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
