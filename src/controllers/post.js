const postService = require('../services/post');
const statushttp = require('../utils/statushttp');

const newPost = async (req, res) => {
  const { user } = req;
  const { title, content, categoryIds } = req.body;
  const userId = user.data.id;
  const post = await postService.newPost(title, content, categoryIds, userId);

  return res.status(statushttp[post.status]).json(post.data);
};

const getPosts = async (_req, res) => {
  const post = await postService.getPosts();
  res.status(statushttp[post.status]).json(post.data);
};

module.exports = {
  newPost,
  getPosts,
};