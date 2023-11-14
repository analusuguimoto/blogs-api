const joi = require('joi');

const schema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required(),
});

const validation = (req, res, next) => {
  const { error } = schema.validate(req.body);

  if (error) return res.status(400).json({ message: 'Some required fields are missing' });

  next();
};

module.exports = validation;