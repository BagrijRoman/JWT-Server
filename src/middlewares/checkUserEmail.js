import R from 'ramda';

import { responseHelper } from '../services';
import { logger } from '../utils';
import { Users } from '../models';
import { errors } from '../const';

const checkUserEmail = async (req, res, next) => {
  try {
    const { email } = req.body;
    const userRec = await Users.findUserByEmail(email);

    if (R.isNil(userRec)) {
      logger.info(`checkUserEmail:: User with email: ${email} does not exists`);
      return responseHelper.badRequest(
        res,
        errors.USER_WITH_EMAIL_DOES_NOT_EXISTS,
        'User with email does not exists',
      );
    }

    req.user = userRec.toObject();

    return next();
  } catch (err) {
    logger.error(`checkUserEmail:: error details ${err.toString()}`);
    return next(err);
  }
};

export default checkUserEmail;
