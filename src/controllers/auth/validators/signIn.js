import { celebrate, Joi } from 'celebrate';

import { errors } from '../../../const/';

const signInValidator = celebrate({
  body: Joi.object().keys({
    email: Joi.string().email().required().error(() => errors.VALID_EMAIL_SHOULD_BE_PROVIDED),
    password: Joi.string().min(6).max(20).required(),
  }),
});

export default signInValidator;
