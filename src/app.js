require('dotenv').config();
const express = require('express');
const connectToMongoDB = require('./config/db');

const app = express();

(async () => await connectToMongoDB())();

module.exports = app;
