import { responseHelper, logger } from '../../utils';

const refreshTokenController = (req, res, next) => {
  try {
    return responseHelper.sendTokens(res, req.user);
  } catch (err) {
    logger.error(`refreshTokenController ${err}`);
    next(err);
  }
};

export default refreshTokenController;
