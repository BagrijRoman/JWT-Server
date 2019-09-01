
// todo add global 404 handler

import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import authController from './controllers/auth';

import {
  httpLogger,
  globalErrorHandler,
  validationErrorHandler,
} from './middlewares';

import { logger } from './utils';

const {
  PORT = 3000,
  MONGO_URI,
} = process.env;

const app = express();

console.log('MONGO_URI ', MONGO_URI);

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true })
  .then(() => logger.info(`Mongodb connected at ${MONGO_URI}`))
  .catch(err => logger.error(`Db connection error at ${MONGO_URI} \n Err details ${err}`));

app.use(bodyParser.json());
app.use(httpLogger);
app.use('/auth', authController);
app.get('/', (req, res) => {
  res.send('Hello world!!!');
});
app.use(validationErrorHandler);
app.use(globalErrorHandler);

app.listen({ port: PORT }, (err) => {
  if (err) {
    return logger.error(`App listening error  ${err}`);
  }
  logger.info(`Server listening on port ${PORT}`);
});
