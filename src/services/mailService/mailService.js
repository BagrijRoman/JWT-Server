class MailService {
  constructor() {

  }

  sendMail = (mailTo, subject, content) => {
    console.log(`Send mail to ${mailTo}`);

  };

  resetPasswordLinkNotification = (mailTo, link) => {
    console.log('resetPasswordLinkNotification');
    console.log('mailTo ', mailTo);
    console.log('link ', link);
  };

}

export { MailService };
