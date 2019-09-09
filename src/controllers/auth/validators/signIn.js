import { celebrate, Joi } from 'celebrate';

const signInValidator = celebrate({
  body: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(20).required(),
  }),
});

export default signInValidator;
