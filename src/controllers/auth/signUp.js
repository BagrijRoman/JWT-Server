import { responseHelper } from '../../services';
import { logger } from '../../utils';
import { Users } from '../../models';
import { errors } from '../../const';

export const signUpController = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const userByMail = await Users.findUserByEmail(email);

    if (userByMail) {
      logger.info(`signUpController:: user with mail already exists. email: ${email}`);
      return responseHelper.badRequest(res, errors.EMAIL_ALREADY_IN_USE, { key: 'email' });
    }

    const newUser = await Users.addNewUser({ name, email, password });

    return responseHelper.sendTokens(res, newUser.toObject());
  } catch (err) {
    logger.error(`signUpController:: ${err}`);
    next(err);
  }
};
