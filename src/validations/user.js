const joi = require('joi');

const schema = joi.object({
  displayName: joi.string().min(8).required(),
  email: joi.string().email().required(),
  password: joi.string().min(6).required(),
  image: joi.string(),
}).messages({
  'string.min': '{#label} length must be at least {#limit} characters long',
  'string.email': '{#label} must be a valid email',
  'any.required': '{#label} is a required field',
});

const validation = (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });
  next();
};

module.exports = validation;