import { logger } from '../utils';

/*
* checkAuth  middleware
*
* If request is authorized - send error to a client
* If request is unauthorized - call next
*
* */

const checkAuth = (req, res, next) => {
  try {

    // todo add logic here

  } catch (err) {
    logger.error(`checkIsUnauthorized  error: ${err}`);
    throw err;
  }
};

export default checkAuth;
