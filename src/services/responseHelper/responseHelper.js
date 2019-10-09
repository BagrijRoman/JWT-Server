import {
  notificationMessageKeys as messages,
  errors,
  httpStatus,
} from '../../const';

/*
* response structure
*
*   {
*     err: boolean
*     success: boolean
*     data: {}  - object with response data,
*     msgKey: string  - message key which will be interpreted on client
*   }
*
* */

class ResponseHelper {
  success = (res) => {

  };

  sendTokens = (res, userData) => {
    const { _id, email } = userData;
    const tokens = encryptionHelper.generateTokens({ _id: _id.toString(), email });
    res.status(httpStatus.OK).json({
      data: { userData },
      ...tokens,
    });
  };

  unauthorized = (res, msgKey = errors.UNAUTHORIZED, data = {}) =>
    res.status(httpStatus.UNAUTHORIZED).json({
      error: true,
      msgKey,
      data,
    });

  forbidden = (res, msgKey = errors.OPERATION_IS_FORBIDDEN_FOR_SOME_REASONS, data = {}) =>
    res.status(httpStatus.FORBIDDEN).json({
      error: true,
      msgKey,
      data
    });

  badRequest = (res, msgKey, data = {}) => res.status(httpStatus.BAD_REQUEST).json({
    error: true,
    msgKey,
    data,
  });

  internalServerError = (res, data = {}) => res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
    error: true,
    msgKey: errors.INTERNAL_SERVER_ERROR,
    data
  });
}

export { ResponseHelper };