import { responseHelper } from '../utils';

const validationErrorHandler = (err, req, res, next) => {
  const { joi } = err;

  if (joi && joi.isJoi) {
    const { name, details } = joi;
    const { meta } = err;

    return responseHelper.validationError(res, { name, details, meta });
  }

  return next(err);
};

export default validationErrorHandler;
