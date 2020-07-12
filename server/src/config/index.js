require('dotenv').config();

module.exports = {
  server: {
    PORT: process.env.PORT || 5000,
  },
  db: {},
  jwt: {
    JWT_SECRET: process.env.JWT_SECRET || '',
    JWT_REFRESH_TOKEN_EXPIRY: process.env.JWT_REFRESH_TOKEN_EXPIRY || '90d',
    JWT_ACCESS_TOKEN_EXPIRY: process.env.JWT_REFRESH_TOKEN_EXPIRY || '30m',
    JWT_ISSUER: process.env.JWT_ISSUER || '',
  },
};
