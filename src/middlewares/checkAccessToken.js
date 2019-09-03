import { logger, responseHelper } from '../utils';
import { Users } from '../models';

/*
* checkAuth  middleware
*
* If request is authorized - send error to a client
* If request is unauthorized - call next
*
* */

const checkAuth = async (req, res, next) => {
  try {

    // todo add logic here

  } catch (err) {
    logger.error(`checkIsUnauthorized  error: ${err}`);
    next(err);
  }
};

export default checkAuth;
