const { Category } = require('../models');

const categoryPost = async (name) => {
  const category = await Category.create({ name });

  return { status: 'CREATED', data: category };
};

module.exports = {
  categoryPost,
};