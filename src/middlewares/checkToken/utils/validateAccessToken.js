import jwt from 'jsonwebtoken';

const validateAccessToken = (token = '') => {
  try {
    return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
  } catch (err) {
    return false;
  }
};

export default validateAccessToken;
