import { logger } from '../../utils';

const signInController = (req, res, next) => {
  try {

    return res.send('signInController');

  } catch (err) {
    logger.error(`signInController  ${err}`);
    return next(err);
  }
};

export default signInController;