import { logger } from '../../utils';
import { Users } from '../../models';
import { responseHelper } from '../../utils';
import { hashPassword } from './utils';

const signUpController = async (req, res, next) => {
  try {
    const {
      name,
      email,
      password,
    } = req.body;

    const userByMail = await Users.findOne({ email });

    if (userByMail) {
      const message = 'Email already in use';
      logger.error(`signUpController:: ${message}: ${email}`);
      return responseHelper.validationError(res, { message });
    }

    const passwordHash = await hashPassword(password);
    const newUser = await new Users({ name, email, password: passwordHash }).save();
    const { _id } = newUser;

    return responseHelper.signIn(res, newUser.toObject(), { _id, name, email });
  } catch (err) {
    logger.error(`signUpController:: ${err}`);
    next(err);
  }
};

export default signUpController;
