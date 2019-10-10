import { celebrate, Joi } from 'celebrate';

import {
  nameValidator,
  emailValidator,
  passwordValidator,
  rePasswordValidator,
} from './commonValidatorFns';

export const signUpValidator = celebrate({
  body: Joi.object().keys({
    name: nameValidator,
    email: emailValidator,
    password: passwordValidator,
    rePassword: rePasswordValidator,
  }),
});
