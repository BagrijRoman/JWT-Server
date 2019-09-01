import {
  httpStatus,
  messages,
} from '../const';

class responseHelper {
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
}

export default responseHelper;
