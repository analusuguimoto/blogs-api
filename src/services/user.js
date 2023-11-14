const { User } = require('../models');
const jwtToken = require('../jwt/login-auth');

const user = async (displayName, email, password, image) => {
  const foundUser = await User.findOne({ where: { email } });

  if (foundUser) {
    return { status: 'CONFLICT', data: { message: 'User already registered' } };
  } 

  const userCreated = await User.create({ displayName, email, password, image });
  const token = jwtToken.jwtSignToken(userCreated);

  return { status: 'CREATED', data: { token } };
};

module.exports = {
  user,
};