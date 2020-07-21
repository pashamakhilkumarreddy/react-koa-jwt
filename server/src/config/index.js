require('dotenv').config();

module.exports = {
  server: {
    PORT: process.env.PORT || 5000,
  },
  db: {
    DB_HOST: process.env.DB_HOST || 'localhost',
    DB_PORT: process.env.DB_PORT || '27017',
    DB_NAME: process.env.DB_NAME || 'test',
    DB_USER: process.env.DB_USER || 'test',
    DB_PASSWORD: process.env.DB_PASSWORD || 'test',
  },
  jwt: {
    JWT_SECRET: process.env.JWT_SECRET || '',
    JWT_REFRESH_TOKEN_EXPIRY: process.env.JWT_REFRESH_TOKEN_EXPIRY || '90d',
    JWT_ACCESS_TOKEN_EXPIRY: process.env.JWT_REFRESH_TOKEN_EXPIRY || '30m',
    JWT_ISSUER: process.env.JWT_ISSUER || 'johndoe',
  },
};
