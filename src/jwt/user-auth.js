const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const jwtUser = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || authorization === '') {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const createdToken = authorization.split(' ')[1] || authorization.split(' ')[0];
    const userVerify = jwt.verify(createdToken, secret);
    req.user = userVerify;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  jwtUser,
};