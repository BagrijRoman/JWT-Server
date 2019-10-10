import express from 'express';

import { signUpController } from './signUp';
import { signInController } from './signIn';
import { refreshTokenController } from './refreshToken';
import { changePasswordController } from './changePassword';
import { resetPasswordRequestController } from './restePasswordRequest';
import resetPassword from './resetPassword';

import {
  checkIsUnauthorized,
  checkAccessToken,
  checkRefreshToken,
  checkUserEmail,
} from '../../middlewares';
import {
  signUpValidator,
  signInValidator,
  changePasswordValidator,
  resetPasswordRequestValidator,
} from './validators';


const setupAuthRoutes = (router) => {
  router.route('/sign-up')
    .post(
      checkIsUnauthorized,
      signUpValidator,
      signUpController,
    );

  router.route('/sign-in')
    .post(
      checkIsUnauthorized,
      signInValidator,
      signInController,
    );

  router.route('/refresh')
    .get(
      checkRefreshToken,
      refreshTokenController,
    );

  router.route('/change-password')
    .post(
      checkAccessToken,
      changePasswordValidator,
      changePasswordController,
    );

  router.route('/reset-password-request')
    .post(
      resetPasswordRequestValidator,
      checkUserEmail,
      resetPasswordRequestController,
    );

  router.route('/reset-password')
    .post(
      // validate provided passwords data
      // check provided reset password token
      // change password and mark token as used
      resetPassword,
    );

  return router;
};

export default setupAuthRoutes(express.Router());
