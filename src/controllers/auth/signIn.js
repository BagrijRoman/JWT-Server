import { responseHelper, encryptionHelper } from '../../services';
import { Users } from '../../models';
import { logger } from '../../utils';

export const signInController = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await Users.findUserByEmail(email);

    if (!user) {
      logger.info(`signInController:: invalid email provided. Details email: ${email}`);
      return responseHelper.badRequest(res, errorMessageKeys.USER_WITH_PROVIDED_EMAIL_DOES_NOT_EXISTS, { key: 'email' });
    }

    const isPasswordValid = await encryptionHelper.verifyPassword(password, user.password);

    if (!isPasswordValid) {
      logger.info(`signInController:: invalid password provided. Details email: ${email}  password: ${password}`);
      return responseHelper.badRequest(res, errorMessageKeys.USER_WITH_PROVIDED_EMAIL_DOES_NOT_EXISTS, { key: 'password' });
    }

    return responseHelper.sendTokens(res, user.toObject());
  } catch (err) {
    logger.error(`signInController:: error details ${err.toString()}`);
    return next(err);
  }
};
