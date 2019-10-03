import { responseHelper } from '../services';
import { logger } from '../utils';

/*
* checkIsUnauthorized  middleware
*
* If request is authorized - send error to a client
* If request is unauthorized - call next
*
* */

const checkIsUnauthorized = (req, res, next) => {
  try {
    const isAuthHeaderExists = !!req.header('Authorization');

    if (isAuthHeaderExists) {
      return responseHelper.forbidden(res);
    }

    return next();
  } catch (err) {
    logger.error(`checkIsUnauthorized  error: ${err}`);
    next(err);
  }
};

export default checkIsUnauthorized;
