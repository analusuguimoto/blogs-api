const category = require('../services/category');
const statushttp = require('../utils/statushttp');

const categoryPost = async (req, res) => {
  const { name } = req.body;
  const result = await category.categoryPost(name);

  res.status(statushttp[result.status]).json(result.data);
};

const categoryGet = async (req, res) => {
  const result = await category.categoryGet();
  res.status(statushttp[result.status]).json(result.data);
};

module.exports = {
  categoryPost,
  categoryGet,
};