const jwt = require('jsonwebtoken');

const {
  ACCESS_TOKEN_LIFETIME,
  ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_LIFETIME,
  REFRESH_TOKEN_SECRET,
} = process.env;

const generateTokens = (payload = {}) => ({
  token: jwt.sign(
    payload,
    ACCESS_TOKEN_SECRET,
    { expiresIn: ACCESS_TOKEN_LIFETIME }
  ),
  refreshToken: jwt.sign(
    payload,
    REFRESH_TOKEN_SECRET,
    { expiresIn: REFRESH_TOKEN_LIFETIME }
  ),
});

export default generateTokens;
