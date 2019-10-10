import { logger } from '../utils';
import { responseHelper } from '../services';

const globalErrorHandler = (err, req, res, next) => {
  logger.error(`globalErrorHandler  ${err.toString()}`);
  return responseHelper.internalServerError(res, { err });
};

export default globalErrorHandler;
