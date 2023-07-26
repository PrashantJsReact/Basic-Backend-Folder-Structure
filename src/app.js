require('dotenv').config();
const express = require('express');
const connectToMongoDB = require('./config/db');

const app = express();
app.use(express.json());
// app.use(express.urlencoded({extended: true}))

(async () => await connectToMongoDB())();

app.get('/', (req, res, next) => {
  console.log(req.body);
  res.status(200).json({
    message: 'Hello Node Express world!',
  });
});

app.get('/post/:id', (req, res, next) => {
  console.log(req.params);
  const { id } = req.params;
  res.status(200).json({
    message: 'Hello Node Express world!',
    id: id,
  });
});

app.post('/api/auth/signup', (req, res, next) => {
  const { userName, email, password } = req.body;

  console.log(userName, email, password);

  if (!userName || !email || !password) {
    return res.status(400).json({
      error: 'All fields are mandatory!',
    });
  }

  const user = { id: 11121, userName, email, password };

  return res.status(201).json({
    success: true,
    user,
    token: 1232312321312,
  });
});

module.exports = app;
