const { Category } = require('../models');

const categoryPost = async (name) => {
  const category = await Category.create({ name });

  return { status: 'CREATED', data: category };
};

const categoryGet = async () => {
  const response = await Category.findAll();

  return { status: 'SUCCESS', data: response };
};

module.exports = {
  categoryPost,
  categoryGet,
};