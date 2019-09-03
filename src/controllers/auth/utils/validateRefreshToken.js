import jwt from 'jsonwebtoken';

const validateRefreshToken = (token = '') => {
  try {
    return jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);
  } catch (err) {
    return false;
  }
};

export default validateRefreshToken;
