import nodemailer from 'nodemailer';

import { logger } from './../../utils';

class MailService {
  constructor(config) {
    const { service, mailbox, password, defaultMailFrom  } = config;
    this.defaultMailFrom = defaultMailFrom;

    this.mailer = nodemailer.createTransport({
      service,
      auth: {
        user: mailbox,
        pass: password,
      }
    });
  }

  async sendMail(from, to, subject, html) {
    try {
      logger.info(`Send mail to ${to}`);
      const result = await this.mailer.sendMail({ from, to, subject, html });

      console.log('sand mail result ', result);
    } catch (err) {
      logger.error(`MailService:sendMail:: error details ${err.toString()}. Sending details ${JSON.stringify({ from, to, subject, html })} `);
      throw err;
    }
  };

  resetPasswordLinkNotification(mailTo, link) {
    console.log('resetPasswordLinkNotification');
    console.log('mailTo ', mailTo);
    console.log('link ', link);
  };
}

export { MailService };
