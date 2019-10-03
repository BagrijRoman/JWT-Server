import { responseHelper, mailService } from '../../services';
import { logger } from '../../utils';
import { ResetPasswordRequests } from '../../models';
import { generateResetPasswordToken, generateResetPasswordLink } from './utils';
import { messages } from '../../const';

const resetPasswordRequestController = async (req, res, next) => {
  try {
    const { _id: userId, email } = req.user;
    const modifiedRecordsCount = await ResetPasswordRequests.disableAllUserRequests(userId);
    logger.info(`Disabling change password requests  userId: ${userId} modifiedRecordsCount ${modifiedRecordsCount}`);
    const token = generateResetPasswordToken(userId);
    const request = await ResetPasswordRequests.addRequest(userId, token);
    logger.info(`New reset password request was created  userId: ${userId}, requestId: ${request._id}`);
    mailService.resetPasswordLinkNotification(email, generateResetPasswordLink(token));

    return responseHelper.success(res, messages.RESET_PASSWORD_LINK_SEND_TO_YOUR_EMAIL);
  } catch (err) {
    logger.error(`resetPasswordRequestController:: error ${err.toString()}`);
    next(err);
  }
};

export default resetPasswordRequestController;
