const mongoose = require('mongoose');

const { MONGODB_URI, USER_NAME, USER_PASSWORD, DB_NAME } = process.env;

const connectToMongoDB = async () => {
  await mongoose
    .connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      user: USER_NAME,
      pass: USER_PASSWORD,
      dbName: DB_NAME,
    })
    .then((res) => {
      console.log('CONNECTED successfully to the mongo Database!');
    })
    .catch((error) => {
      console.log(error);
      console.log('Database connection FAILED');
      process.exit(1);
    });
};

module.exports = connectToMongoDB;
