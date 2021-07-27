const dotenv = require('dotenv');
dotenv.config();

export const appConfig = {
  jwtSecret: process.env.jwtSecret,
  host: process.env.host,
  username: process.env.username,
  password: process.env.password,
  database: process.env.database,
};
