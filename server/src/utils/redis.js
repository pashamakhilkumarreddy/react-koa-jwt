const redis = require('redis');

const {
  db: {
    redis: rd,
  },
} = require('../config');

const client = redis.createClient(rd.PORT);
client.auth(rd.PASSWORD);

client.on('error', (err) => {
  console.error(err);
});

client.on('ready', (err) => {
  console.info('Redis is ready');
  console.error(err);
});

client.on('connect', (err) => {
  console.info('Redis is ready tp connect');
  console.error(err);
});

module.exports = client;
