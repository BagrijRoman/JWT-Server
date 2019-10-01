import { celebrate, Joi } from 'celebrate';

import { emailValidator, passwordValidator } from './commonValidatorFns';

const signInValidator = celebrate({
  body: Joi.object().keys({
    email: emailValidator,
    password: passwordValidator,
  }),
});

export default signInValidator;
