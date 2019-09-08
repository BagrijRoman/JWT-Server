import { celebrate, Joi } from 'celebrate';

const changePasswordValidator = celebrate({
  body: Joi.object().keys({
    currentPassword:  Joi.string().min(6).max(20).required(),
    password:  Joi.string().min(6).max(20).required(),
    rePassword: Joi.any().valid(Joi.ref('password')).required().label('Passwords do not match'),
  }),
});

export default changePasswordValidator;