import { Joi } from 'celebrate';

import { errors } from '../../../const/';

const nameValidator = Joi.string().min(3).max(30).required().error(() => errors.NAME_SHOULD_BE_FROM_THREE_TO_THIRTY_SYMBOLS);
const emailValidator = Joi.string().email().required().error(() => errors.VALID_EMAIL_SHOULD_BE_PROVIDED);
const passwordValidator = Joi.string().min(6).max(20).required().error(() => errors.PASSWORD_SHOULD_BE_FROM_SIX_TO_TWENTY_SYMBOLS);
const rePasswordValidator = Joi.any().valid(Joi.ref('password')).required().error(() => errors.PASSWORD_CONFIRMATION_SHOULD_MATCH);

export {
  nameValidator,
  emailValidator,
  passwordValidator,
  rePasswordValidator,
};


