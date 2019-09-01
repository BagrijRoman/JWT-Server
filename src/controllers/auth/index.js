import express from 'express';

import signUp from './signUp';
import signIn from './signIn';
import refreshToken from './refreshToken';
import changePassword from './changePassword';

const setupAuthRoutes = (router) => {
  router.route('/sign-up')
    .post(signUp);
  router.route('/sign-in')
    .post(signIn);
  router.route('/refresh')
    .post(refreshToken);
  router.route('/change-password')
    .post(changePassword);

  return router;
};

export default setupAuthRoutes(express.Router());
