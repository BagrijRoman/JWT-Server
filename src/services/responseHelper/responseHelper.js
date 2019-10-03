import {
  httpStatus,
  messages,
} from '../../const';

/*
* Response structure
* {
*   success: boolean
*   data: Object
*
*   error: boolean
*   details: { key }
*
*   msgKey,
* }
* */

import { generateTokens } from './utils';

class responseHelper {
  static success(res, msgKey, data = {}) {
    return res
      .status(httpStatus.OK)
      .json({ success: true, msgKey, data });
  }

  // todo unify all response structure


  static created(res, data) {
    return res
      .status(httpStatus.CREATED)
      .json(data);
  }
  static internalServerError(res) {
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .send(messages.INTERNAL_SERVER_ERROR);
  }
  static forbidden(res) {
    return res
      .status(httpStatus.FORBIDDEN)
      .send(messages.FORBIDDEN);
  }
  static validationError(res, details = {}) {
    return res
      .status(httpStatus.BAD_REQUEST)
      .json(details);
  }
  static badRequest(res, errorKey, details = '') {  // todo refactor all response helpers with using errorKey
    return res
      .status(httpStatus.BAD_REQUEST)
      .json({ errorKey, details });
  }
  static sendTokens(res, user, responseData = {}) {
    const { _id, name, email } = user;
    const tokenPayload = { _id, name, email };
    const { token, refreshToken } = generateTokens(tokenPayload);
    return res
      .status(httpStatus.OK)
      .json({
        ...responseData,
        _id,
        name,
        email,
        token,
        refreshToken,
      });
  }
  static unauthorized(res) {
    return res
      .status(httpStatus.UNAUTHORIZED)
      .send(messages.UNAUTHORIZED);
  }
}

export default responseHelper;
