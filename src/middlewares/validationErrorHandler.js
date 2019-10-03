import { responseHelper } from '../services';
import { errors } from '../const';

const validationErrorHandler = (err, req, res, next) => {
  const { joi } = err;

  if (joi && joi.isJoi) {
    const { details } = joi;
    const { context: { key }, path, type, message } = details[0];

    return responseHelper.validationError(res, {
      type: errors.VALIDATION_ERROR,
      details: { key, path, type, message },
    });
  }

  return next(err);
};

export default validationErrorHandler;
