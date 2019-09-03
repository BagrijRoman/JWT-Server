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
    .post(
      checkRefreshToken,
      refreshToken
    );

  router.route('/change-password')
    .post(
      checkAccessToken,
      changePassword
    );

  return router;
};

export default setupAuthRoutes(express.Router());
