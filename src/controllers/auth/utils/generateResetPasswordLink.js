const { CLIENT_RESET_PASSWORD_PAGE_URL } = process.env;

const generateResetPasswordLink = (token) => `${CLIENT_RESET_PASSWORD_PAGE_URL}?token=${token}`;
