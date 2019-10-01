import { celebrate, Joi } from 'celebrate';

import { emailValidator } from './commonValidatorFns';

const resetPasswordRequestValidator = celebrate({
  body: Joi.object().keys({
    email: emailValidator,
  }),
});

export default resetPasswordRequestValidator;
