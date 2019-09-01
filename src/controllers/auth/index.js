import express from 'express';

import signUp from './signUp';
import signIn from './signIn';
import refreshToken from './refreshToken';
import changePassword from './changePassword';

import { checkIsUnauthorized } from '../../middlewares';

const setupAuthRoutes = (router) => {
  router.route('/sign-up')
    .post(checkIsUnauthorized, signUp);
  router.route('/sign-in')
    .post(checkIsUnauthorized, signIn);
  router.route('/refresh')
    .post(refreshToken);
  router.route('/change-password')
    .post(changePassword);

  return router;
};

export default setupAuthRoutes(express.Router());
