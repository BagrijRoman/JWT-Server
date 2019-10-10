import { responseHelper } from '../../services';
import { logger } from '../../utils';

export const refreshTokenController = (req, res, next) => {
  try {
    return responseHelper.sendTokens(res, req.user);
  } catch (err) {
    logger.error(`refreshTokenController:: error details ${err.toString()}`);
    next(err);
  }
};
