import responseHelper from './responseHelper';
import { mailService as mail } from './mailService';

const mailService = new mailService();

export {
  responseHelper,
  mailService,
};
