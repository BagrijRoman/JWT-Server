const router = require('express').Router();

const signUp = require('./signUp');
const signIn = require('./signIn');
const refreshToken = require('./refreshToken');
const changePassword = require('./changePassword');

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

module.exports = setupAuthRoutes(router);
