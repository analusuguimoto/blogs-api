const { Category } = require('../models');

const categoryPost = async (name) => {
  const category = await Category.create({ name });

  return { status: 'CREATED', data: category };
};

const categoryGet = async () => {
  const response = await Category.findAll();

  return { status: 'SUCCESS', data: response };
};

const categoryGetById = async (categoryIds) => {
  const findById = categoryIds.map(async (id) => Category.findByPk(id));
  const result = await Promise.all(findById);
  // console.log('find by id', result);

  const nullCategories = result.some((id) => id === null);
  // console.log('no categories', nullCategories);
  return nullCategories;
};

module.exports = {
  categoryPost,
  categoryGet,
  categoryGetById,
};