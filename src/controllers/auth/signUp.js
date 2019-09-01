import { logger } from '../../utils';

const signUpController = (req, res) => {
  try {


    return res.send('signUpController ');

  } catch (err) {
    logger.error(`signUpController  error: ${err}`);
  }
};

export default signUpController;
