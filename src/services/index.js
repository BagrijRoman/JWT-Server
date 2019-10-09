import { ResponseHelper as ResponseHelperClass } from './responseHelper';
import { MailService as MailServiceClass } from './mailService';


const mailService = new MailServiceClass(); // todo here add configs
const responseHelper = new ResponseHelperClass();

export {
  responseHelper,
  mailService,
};
