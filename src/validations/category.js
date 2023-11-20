const joi = require('joi');

const schema = joi.object({
  name: joi.string().required(),
}).messages({
  'any.required': '{#label} is required',
});

const validation = (req, res, next) => {
  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  next();
};

module.exports = validation;