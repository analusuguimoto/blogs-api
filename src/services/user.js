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

const getAllUsers = async () => {
  const response = await User.findAll({
    attributes: { exclude: ['password'] },
  });

  return { status: 'SUCCESS', data: response };
};

const userById = async (id) => {
  const response = await User.findByPk(id, { attributes: { exclude: ['password'] } });

  if (!response) {
    return { status: 'NOT_FOUND', data: { message: 'User does not exist' } };
  }

  return { status: 'SUCCESS', data: response };
};

module.exports = {
  user,
  getAllUsers,
  userById,
};