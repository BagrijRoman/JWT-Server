import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class EncryptionHelper {
  constructor(config) {
    const {
      accessTokenLifetime,
      accessTokenSecret,
      refreshTokenLifetime,
      refreshTokenSecret,
    } = config;

    this.accessTokenLifetime = accessTokenLifetime;
    this.accessTokenSecret = accessTokenSecret;
    this.refreshTokenLifetime = refreshTokenLifetime;
    this.refreshTokenSecret = refreshTokenSecret;
  }

  __validateToken = (token, secret) => {
    try {
      return jwt.verify(token, secret);
    } catch (err) {
      return false;
    }
  };

  hashPassword = async (password, saltRounds = 10) => {
    const salt = await bcrypt.genSalt(saltRounds);
    return bcrypt.hash(password, salt);
  };

  verifyPassword = async (password, hash) => bcrypt.compare(password, hash);

  validateAccessToken = (token) => this.__validateToken(token, this.accessTokenSecret);

  validateRefreshToken = (token) => this.__validateToken(token, this.refreshTokenSecret);

  generateTokens = (payload = {}) => ({
    token: jwt.sign(
      payload,
      this.accessTokenSecret,
      { expiresIn: this.accessTokenLifetime }
    ),
    refreshToken: jwt.sign(
      payload,
      this.refreshTokenSecret,
      { expiresIn: this.refreshTokenLifetime }
    ),
  });
}

export { EncryptionHelper };