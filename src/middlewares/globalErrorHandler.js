import {
  logger,
  responseHelper,
} from '../utils';

const globalErrorHandler = (err, req, res, next) => {
  logger.error(`globalErrorHandler  ${err}`);
  return responseHelper.internalServerError(res);
};

export default globalErrorHandler;
