import { Users } from '../../models';
import { logger, responseHelper } from '../../utils';
import { validateAccessToken, validateRefreshToken } from './utils';
import { tokenType as tokenTypes } from '../../const';

/*
* checkAuth  middleware
*
* If request is authorized - send error to a client
* If request is unauthorized - call next
*
* */

const checkAuth = tokenType => async (req, res, next) => {
  try {
    const validationFn = tokenType === tokenTypes.ACCESS ? validateAccessToken : validateRefreshToken;
    const decoded = validationFn(req.header('Authorization'));

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

    req.user = user;

    return next();
  } catch (err) {
    logger.error(`checkAuth  tokenType ${tokenType}  ${err}`);
    next(err);
  }
};

export default checkAuth;
