import { ResponseHelper as ResponseHelperClass } from './responseHelper';
import { MailService as MailServiceClass } from './mailService';
import { EncryptionHelper as EncryptionHelperClass } from './encryptionHelper';

const {
  ACCESS_TOKEN_LIFETIME,
  ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_LIFETIME,
  REFRESH_TOKEN_SECRET,
} = process.env;


const mailService = new MailServiceClass(); // todo here add configs
const encryptionHelper = new EncryptionHelperClass({
  accessTokenLifetime: ACCESS_TOKEN_LIFETIME,
  accessTokenSecret: ACCESS_TOKEN_SECRET,
  refreshTokenLifetime: REFRESH_TOKEN_LIFETIME,
  refreshTokenSecret: REFRESH_TOKEN_SECRET,
});
const responseHelper = new ResponseHelperClass({
  encryptionHelper,
});

export {
  responseHelper,
  mailService,
  encryptionHelper,
};
