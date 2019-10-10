import { responseHelper, encryptionHelper } from '../../services';
import { logger } from '../../utils';
import { Users } from '../../models';
import { errors } from '../../const';

export const changePasswordController = async (req, res, next) => {
  try {
    const {
      user: { _id, password: passwordHash },
      body: { currentPassword, password: newPassword },
    } = req;
    const isPasswordsMatch = await encryptionHelper.verifyPassword(currentPassword, passwordHash);

    if (!isPasswordsMatch) {
      logger.info(`changePasswordController:: provided password invalid. userId: ${_id} `);
      return responseHelper.badRequest(res, errors.INVALID_PASSWORD_SPECIFIED, { key: 'currentPassword' });
    }

    if (newPassword === currentPassword) {
      logger.info(`changePasswordController:: password should be different with previous one. userId: ${_id} `);
      return responseHelper.badRequest(res, errors.PASSWORD_MUST_BE_DIFFERENT_WITH_PREV_ONE, { key: 'password' });
    }

    const updatedUser = await Users.setUserPassword(_id, newPassword);

    return responseHelper.sendTokens(res, updatedUser.toObject());
  } catch (err) {
    logger.error(`changePasswordController:: error details ${err.toString()}`);
    next(err);
  }
};
