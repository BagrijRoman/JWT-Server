import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

import authController from './controllers/auth';

import {
  httpLogger,
  globalErrorHandler,
  validationErrorHandler,
} from './middlewares';

import { logger } from './utils';

const {
  PORT = 3000,
  MONGO_URL,
  ACCESS_CONTROL_ALLOW_ORIGIN_VALUE
} = process.env;

const app = express();

mongoose
  .connect(MONGO_URL, { useCreateIndex: true, useNewUrlParser: true })
  .then(() => logger.info(`Mongodb connected at ${MONGO_URL}`))
  .catch(err => logger.error(`Db connection error at ${MONGO_URL} \n Err details ${err}`));

app.use(cors({ origin: ACCESS_CONTROL_ALLOW_ORIGIN_VALUE }));
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
