import { responseHelper } from '../../services';
import { logger } from '../../utils';
import { ResetPasswordRequests } from '../../models';
import { generateResetPasswordToken } from './utils';

const resetPasswordRequestController = async (req, res, next) => {
  try {
    const { _id: userId } = req.user;
    const modifiedRecordsCount = await ResetPasswordRequests.disableAllUserRequests(userId);
    const token = generateResetPasswordToken(userId);
    const request = await ResetPasswordRequests.addRequest(userId, token);

    logger.info(`New reset password request was created  userId: ${userId}, requestId: ${request._id}`);

    // send mail notification











    // send mail notification
    // send success: true
    // possible msgKey


    console.log('resetPasswordRequestController ');

    res.send();
  } catch (err) {
    logger.error(`resetPasswordRequestController:: error ${err.toString()}`);
    next(err);
  }
};

export default resetPasswordRequestController;
