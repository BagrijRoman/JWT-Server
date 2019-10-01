import express from 'express';

import signUp from './signUp';
import signIn from './signIn';
import refreshToken from './refreshToken';
import changePassword from './changePassword';

import {
  checkIsUnauthorized,
  checkAccessToken,
  checkRefreshToken,
} from '../../middlewares';
import {
  signUpValidator,
  signInValidator,
  changePasswordValidator,
} from './validators';


const setupAuthRoutes = (router) => {
  router.route('/sign-up')
    .post(
      checkIsUnauthorized,
      signUpValidator,
      signUp
    );

  router.route('/sign-in')
    .post(
      checkIsUnauthorized,
      signInValidator,
      signIn
    );

  router.route('/refresh')
    .get(
      checkRefreshToken,
      refreshToken
    );

  router.route('/change-password')
    .post(
      checkAccessToken,
      changePasswordValidator,
      changePassword
    );

  router.route('/reset-password-request')
    .post(
      // validate email
      // check existing reset password tokens
      // generate reset password token
    );

  router.route('/reset-password')
    .post(
      // validate provided passwords data
      // check provided reset password token
      // change password and mark token as used
    );

  return router;
};

export default setupAuthRoutes(express.Router());
