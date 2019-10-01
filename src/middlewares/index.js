import { tokenType } from '../const';

import httpLogger from './httpLogger';
import checkToken from './checkToken';
import checkIsUnauthorized from './checkIsUnAuthorized';
import globalErrorHandler from './globalErrorHandler';
import validationErrorHandler from './validationErrorHandler';
import checkUserEmail from './checkUserEmail';

const checkAccessToken = checkToken(tokenType.ACCESS);
const checkRefreshToken = checkToken(tokenType.REFRESH);

export {
  httpLogger,
  checkAccessToken,
  checkRefreshToken,
  checkIsUnauthorized,
  globalErrorHandler,
  validationErrorHandler,
  checkUserEmail,
}
