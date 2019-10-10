const { CLIENT_RESET_PASSWORD_PAGE_URL } = process.env;

// todo move this functionnality to encryption helper

const generateResetPasswordLink = (token) => `${CLIENT_RESET_PASSWORD_PAGE_URL}?token=${token}`;
