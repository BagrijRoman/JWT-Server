import { responseHelper, encryptionHelper } from '../../services';
import { Users } from '../../models';
import { logger } from '../../utils';
import { errors } from '../../const';

export const signInController = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await Users.findUserByEmail(email);

    if (!user) {
      logger.info(`signInController:: invalid email provided. Details email: ${email}`);
      return responseHelper.badRequest(res, errors.USER_WITH_EMAIL_DOES_NOT_EXISTS, { key: 'email' });
    }

    const isPasswordValid = await encryptionHelper.verifyPassword(password, user.password);

    if (!isPasswordValid) {
      logger.info(`signInController:: invalid password provided. Details email: ${email}  password: ${password}`);
      return responseHelper.badRequest(res, errors.INVALID_PASSWORD_SPECIFIED, { key: 'password' });
    }

    return responseHelper.sendTokens(res, user.toObject());
  } catch (err) {
    logger.error(`signInController:: error details ${err.toString()}`);
    return next(err);
  }
};
