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

const postById = async (req, res) => {
  const { id } = req.params;
  const findPost = await postService.postById(id);
  res.status(statushttp[findPost.status]).json(findPost.data);
};

module.exports = {
  newPost,
  getPosts,
  postById,
};