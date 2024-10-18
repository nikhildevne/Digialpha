const Joi = require('joi');

const userInfo = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  emailId: Joi.string().required(),
  phone: Joi.string().required(),
  role: Joi.string(),
});

const userRole = Joi.object({
  role: Joi.string().required()
});

const login = Joi.object({
  emailId: Joi.string().required(),
  password: Joi.string().min(8).required()
});

module.exports = {
  userInfo,
  userRole,
  login
};