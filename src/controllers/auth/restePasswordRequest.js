import { logger, responseHelper } from '../../utils';
import { ResetPasswordRequests } from '../../models';

const resetPasswordRequestController = async (req, res, next) => {
  try {
    const { _id: userId } = req.user;
    const modifiedRecordsCount = await ResetPasswordRequests.disableAllUserRequests(userId);




    // generate token
    // add it to database
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
