import { responseHelper, mailService, encryptionHelper } from '../../services';
import { ResetPasswordRequests } from '../../models';
import { messages } from '../../const';
import { logger } from '../../utils';

export const resetPasswordRequestController = async (req, res, next) => {
  try {
    const { _id: userId, email } = req.user;
    const modifiedRecordsCount = await ResetPasswordRequests.disableAllUserRequests(userId);
    logger.info(`Disabling change password requests  userId: ${userId} modifiedRecordsCount ${modifiedRecordsCount}`);

    const token = encryptionHelper.generateResetPasswordToken(userId);
    const request = await ResetPasswordRequests.addRequest(userId, token);
    const resetPasswordLink = encryptionHelper.generateResetPasswordLink(token);

    logger.info(`New reset password request was created  userId: ${userId}, requestId: ${request._id}`);
    mailService.resetPasswordLinkNotification(email, resetPasswordLink);

    return responseHelper.success(res, messages.RESET_PASSWORD_LINK_SEND_TO_YOUR_EMAIL);
  } catch (err) {
    logger.error(`resetPasswordRequestController:: error details ${err.toString()}`);
    next(err);
  }
};
