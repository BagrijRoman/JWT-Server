import { celebrate, Joi } from 'celebrate';

import { errors } from '../../../const';

const signUpValidator = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(3).max(30).required().error(() => errors.NAME_SHOULD_BE_FROM_THREE_TO_THIRTY_SYMBOLS),
    email: Joi.string().email().required().error(() => errors.VALID_EMAIL_SHOULD_BE_PROVIDED),
    password: Joi.string().min(6).max(20).required().error(() => errors.PASSWORD_SHOULD_BE_FROM_SIX_TO_TWENTY_SYMBOLS),
    rePassword: Joi.any().valid(Joi.ref('password')).required().error(() => errors.PASSWORD_CONFIRMATION_SHOULD_MATCH),
  }),
});

export default signUpValidator;
