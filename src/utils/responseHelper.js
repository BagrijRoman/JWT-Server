import {
  httpStatus,
  messages,
} from '../const';

import { generateTokens } from '../controllers/auth/utils';

class responseHelper {
  static created(res, data) {
    return res
      .status(httpStatus.CREATED)
      .json(data);
  }
  static signIn(res, user, responseData = {}) {
    const { token, refreshToken } = generateTokens(user);
    const { _id, name, email } = user;
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
  static badRequest(res, message = '') {
    return res
      .status(httpStatus.BAD_REQUEST)
      .send(message);
  }
}

export default responseHelper;
