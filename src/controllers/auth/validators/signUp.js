const { celebrate, Joi } = require('celebrate');

const signUpValidator = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password:  Joi.string().min(6).max(20).required(),
    rePassword: Joi.any().valid(Joi.ref('password')).required().label('Passwords do not match'),
  }),
});

export default signUpValidator;
