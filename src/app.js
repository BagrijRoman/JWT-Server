const express = require('express');

const authController = require('./controllers/auth');

const { httpLogger } = require('./middlewares');
const { logger } = require('./utils');

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
