const express = require('express');

const authControllers = require('./controllers/auth');

const PORT = 3000;
const app = express();

app.use('/auth', authControllers);

app.get('/', (req, res) => {
  res.send('Hello world!!!');
});

app.listen({ port: PORT }, (err) => {
  if (err) {
    return console.log(`App listening error  ${err}`);
  }
  console.log(`Server listening on port ${PORT}`);
});
