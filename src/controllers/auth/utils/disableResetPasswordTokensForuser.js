import { logger } from '../../../utils';
import { ResetPasswordRequests } from '../../../models';

const disableResetPasswordTokensForUser = async (userId) => {
  try {




    // todo here disable all existing reset password tokens for user

  } catch (err) {
    logger.error(`disableResetPasswordTokensForUser:: userId ${userId}  error details: ${err.toString()}`);
    throw err;
  }
};

export default disableResetPasswordTokensForUser;
