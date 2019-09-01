import express from 'express';

import authController from './controllers/auth';

import { httpLogger } from './middlewares';
import { logger } from './utils';

const PORT = 3000;
const app = express();

app.use(httpLogger);
app.use('/auth', authController);
app.get('/', (req, res) => {
  res.send('Hello world!!!');
});

app.listen({ port: PORT }, (err) => {
  if (err) {
    return logger.error(`App listening error  ${err}`);
  }
  logger.info(`Server listening on port ${PORT}`);
});
