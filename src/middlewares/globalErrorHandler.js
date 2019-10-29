import { logger } from '../utils';
import { responseHelper } from '../services';

const globalErrorHandler = (err, req, res, next) => {
  const errDescription = err.toString();
  logger.error(`globalErrorHandler  ${errDescription}`);
  return responseHelper.internalServerError(res, { err: errDescription });
};

export default globalErrorHandler;
