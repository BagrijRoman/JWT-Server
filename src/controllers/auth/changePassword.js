import bcrypt from 'bcryptjs';

import { responseHelper, logger } from '../../utils';
import { hashPassword } from './utils';
import { Users } from '../../models';

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
      return responseHelper.badRequest(res, 'Invalid password specified');
    }

    if (newPassword === currentPassword) {
      logger.error(`changePasswordController  Password must be different with a prev one.  userId ${_id}`);
      return responseHelper.badRequest(res, 'Password must be different with a prev one');
    }

    const updatedUser = await Users.findByIdAndUpdate(
      _id,
      { password: newPasswordHash },
      { new: true, useFindAndModify: false }
    );

    return responseHelper.signIn(res, updatedUser.toObject());
  } catch (err) {
    logger.error(`changePasswordController ${err}`);
    next(err);
  }
};

export default changePasswordController;
