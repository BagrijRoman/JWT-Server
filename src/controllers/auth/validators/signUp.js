import { celebrate, Joi } from 'celebrate';

import {
  nameValidator,
  emailValidator,
  passwordValidator,
  rePasswordValidator,
} from './commonValidatorFns';

const signUpValidator = celebrate({
  body: Joi.object().keys({
    name: nameValidator,
    email: emailValidator,
    password: passwordValidator,
    rePassword: rePasswordValidator,
  }),
});

export default signUpValidator;
