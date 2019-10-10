import { ResponseHelper as ResponseHelperClass } from './responseHelper';
import { MailService as MailServiceClass } from './mailService';
import { EncryptionHelper as EncryptionHelperClass } from './encryptionHelper';

const {
  ACCESS_TOKEN_LIFETIME,
  ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_LIFETIME,
  REFRESH_TOKEN_SECRET,
  RESET_PASSWORD_TOKEN_SECRET,
  RESET_PASSWORD_TOKEN_LIFETIME,
  CLIENT_RESET_PASSWORD_PAGE_URL,
} = process.env;


const mailService = new MailServiceClass(); // todo here add configs
const encryptionHelper = new EncryptionHelperClass({
  accessTokenLifetime: ACCESS_TOKEN_LIFETIME,
  accessTokenSecret: ACCESS_TOKEN_SECRET,
  refreshTokenLifetime: REFRESH_TOKEN_LIFETIME,
  refreshTokenSecret: REFRESH_TOKEN_SECRET,
  resetPasswordTokenSecret: RESET_PASSWORD_TOKEN_SECRET,
  resetPasswordTokenLifetime: RESET_PASSWORD_TOKEN_LIFETIME,
  clientResetPasswordPageUrl: CLIENT_RESET_PASSWORD_PAGE_URL,
});
const responseHelper = new ResponseHelperClass({
  encryptionHelper,
});

export {
  responseHelper,
  mailService,
  encryptionHelper,
};
