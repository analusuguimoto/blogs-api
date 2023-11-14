const login = require('../services/login');
const statushttp = require('../utils/statushttp');

const loginController = async (req, res) => {
  const { email, password } = req.body;
  const result = await login.login(email, password);
  res.status(statushttp[result.status]).json(result.data);
};

module.exports = {
  loginController,
};