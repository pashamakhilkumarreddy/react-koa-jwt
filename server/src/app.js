const Koa = require('koa');

const bodyParser = require('koa-body');
const cors = require('@koa/cors');
const compression = require('koa-compress');
const helmet = require('koa-helmet');
const responseTime = require('koa-response-time');
const logger = require('koa-logger');
const rateLimit = require('koa-ratelimit');

const {
  server,
} = require('./config');
const {
  getMONGOURI,
  connectToDB,
} = require('./helpers');

const app = new Koa();
const db = new Map();

app
  .use(logger())
  .use(bodyParser())
  .use(cors())
  .use(helmet())
  .use(compression())
  .use(responseTime({
    hrtime: true,
  }))
  .use(rateLimit({
    driver: 'memory',
    db,
    duration: 90000,
    errorMessage: 'Too many requests',
    id: (ctx) => ctx.ip,
    headers: {
      remaining: 'Rate-Limit-Remaining',
      reset: 'Rate-Limit-Reset',
      total: 'Rate-Limit-Total',
    },
    max: 150,
    disableHeader: false,
  }));

const {
  PORT,
} = server;

require('./routes')({
  app,
});

getMONGOURI({}).then((mongoURI) => {
  connectToDB(mongoURI).then(() => {
    console.info('Successfully connected to the database');
    app.listen(PORT, () => {
      console.info(`The server is up and running on ${PORT}`);
    });
  }).catch((err) => {
    console.error(err);
  });
});
