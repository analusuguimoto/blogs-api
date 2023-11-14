const { User } = require('../models');
const { jwtSignToken } = require('../jwt/login-auth');

const login = async (email, password) => {
  const user = await User.findOne({ where: { email, password } });

  if (!user) return { status: 'BAD_REQUEST', data: { message: 'Invalid fields' } };

  return { status: 'SUCCESS', data: { token: jwtSignToken(user) } };
};

module.exports = {
  login,
};