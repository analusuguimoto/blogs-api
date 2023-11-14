const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const jwtSignToken = (user) => {
  const token = jwt.sign({ data: user }, secret);
  return token;
};

module.exports = {
  jwtSignToken,
};
