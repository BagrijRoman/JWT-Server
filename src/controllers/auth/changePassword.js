import bcrypt from 'bcryptjs';

import { responseHelper } from '../../services';
import { logger } from '../../utils';
import { hashPassword } from './utils';
import { Users } from '../../models';
import { errors } from '../../const';

const changePasswordController = async (req, res, next) => {
  try {
    const {
      user: {
        _id,
        password,
      },
      body: {
        currentPassword,
        password: newPassword,
      }
    } = req;

    const isPasswordsMatch = await bcrypt.compare(currentPassword, password);
    const newPasswordHash = await hashPassword(newPassword);

    if (!isPasswordsMatch) {
      logger.error(`changePasswordController  Invalid password specified.  userId ${_id}`);
      return responseHelper.badRequest(
        res,
        errors.INVALID_EMAIL_OR_PASSWORD_SPECIFIED,
        'Invalid password specified'
      );
    }

    if (newPassword === currentPassword) {
      logger.error(`changePasswordController  Password must be different with a prev one.  userId ${_id}`);
      return responseHelper.badRequest(
        res,
        errors.PASSWORD_MUST_BE_DIFFERENT_WITH_PREV_ONE,
        'Password must be different with a prev one'
      );
    }

    const updatedUser = await Users.findByIdAndUpdate(
      _id,
      { password: newPasswordHash },
      { new: true, useFindAndModify: false }
    );

    return responseHelper.sendTokens(res, updatedUser.toObject());
  } catch (err) {
    logger.error(`changePasswordController ${err}`);
    next(err);
  }
};

export default changePasswordController;
