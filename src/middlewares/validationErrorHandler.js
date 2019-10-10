import { responseHelper } from '../services';

const validationErrorHandler = (err, req, res, next) => {
  const { joi } = err;

  if (joi && joi.isJoi) {
    const { context: { key }, message } = joi.details[0];
    return responseHelper.badRequest(res, message, { key });
  }

  return next(err);
};

export default validationErrorHandler;
