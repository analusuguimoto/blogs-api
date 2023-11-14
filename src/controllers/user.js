const userService = require('../services/user');
const statushttp = require('../utils/statushttp');

const user = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const result = await userService.user(displayName, email, password, image);
  res.status(statushttp[result.status]).json(result.data);
};

const getAllUsers = async (req, res) => {
  const result = await userService.getAllUsers();
  res.status(statushttp[result.status]).json(result.data);
};

module.exports = {
  user,
  getAllUsers,
};