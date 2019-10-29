import { responseHelper } from '../services';
import { Users } from '../models';
import { logger } from '../utils';
import { tokenType as tokenTypes } from '../const';
import { encryptionHelper } from '../services';

/*
* checkAuth  middleware
*
* If request is authorized - send error to a client
* If request is unauthorized - call next
*
* */

const checkToken = tokenType => async (req, res, next) => {
  try {
    const token = req.header('Authorization');
    const decoded = tokenType === tokenTypes.ACCESS
      ? encryptionHelper.validateAccessToken(token)
      : encryptionHelper.validateRefreshToken(token);

    if (!decoded || !decoded._id) {
      logger.info('Unauthorized');
      return responseHelper.unauthorized(res);
    }

    const { _id } = decoded;
    const user = await Users.findOne({ _id });

    if (!user) {
      logger.warn(`Token for non existing user provided   details: ${JSON.stringify(decoded)}`);
      return responseHelper.unauthorized(res);
    }

    req.user = user.toObject();

    return next();
  } catch (err) {
    logger.error(`checkAuth  tokenType ${tokenType}  ${err}`);
    next(err);
  }
};

export default checkToken;