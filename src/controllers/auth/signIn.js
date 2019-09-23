import bcrypt from 'bcryptjs';

import { Users } from '../../models';
import { logger, responseHelper } from '../../utils';

import { errors } from '../../const';

const signInController = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await Users.findOne({ email });
    const errorMessage = 'Invalid password or user does not exists';

    if (!user) {
      logger.error(`User with email: ${email} does not exists`);
      return responseHelper.validationError(res, {
        type: errors.VALIDATION_ERROR,
        details: { key: 'email', message: errors.USER_WITH_EMAIL_DOES_NOT_EXISTS },
      });
    }

    const isPasswordsMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordsMatch) {
      logger.error(`Login with email ${email}: invalid password specified`);
      return responseHelper.validationError(res, {
        type: errors.VALIDATION_ERROR,
        details: { key: 'email', message: errors.INVALID_EMAIL_OR_PASSWORD_SPECIFIED },
      });
    }

    return responseHelper.sendTokens(res, user.toObject());
  } catch (err) {
    logger.error(`signInController  ${err}`);
    return next(err);
  }
};

export default signInController;
