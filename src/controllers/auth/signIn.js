import bcrypt from 'bcryptjs';

import { Users } from '../../models';
import { logger, responseHelper } from '../../utils';

const signInController = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await Users.findOne({ email });
    const errorMessage = 'Invalid password or user does not exists';

    if (!user) {
      logger.error(`User with email: ${email} does not exists`);
      return responseHelper.badRequest(res, errorMessage);
    }

    const isPasswordsMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordsMatch) {
      logger.error(`Login with email ${email}: invalid password specified`);
      return responseHelper.badRequest(res, errorMessage);
    }

    return responseHelper.sendTokens(res, user.toObject());
  } catch (err) {
    logger.error(`signInController  ${err}`);
    return next(err);
  }
};

export default signInController;