const jwt = require('jsonwebtoken');

const {
  RESET_PASSWORD_TOKEN_SECRET,
  RESET_PASSWORD_TOKEN_LIFETIME,
} = process.env;

const generateResetPasswordToken = (userId) => jwt.sign(
  { userId },
  RESET_PASSWORD_TOKEN_SECRET,
  { expiresIn: RESET_PASSWORD_TOKEN_LIFETIME }
);

export default generateResetPasswordToken;
