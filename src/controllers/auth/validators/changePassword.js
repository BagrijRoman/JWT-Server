import { celebrate, Joi } from 'celebrate';

import {
  passwordValidator,
  rePasswordValidator,
} from './commonValidatorFns';

const changePasswordValidator = celebrate({
  body: Joi.object().keys({
    currentPassword:  passwordValidator,
    password:  passwordValidator,
    rePassword: rePasswordValidator
  }),
});

export default changePasswordValidator;
