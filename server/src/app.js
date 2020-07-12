const Koa = require('koa');

const bodyParser = require('koa-body');
const cors = require('@koa/cors');
const compression = require('koa-compress');
const helmet = require('koa-helmet');
const responseTime = require('koa-response-time');
const logger = require('koa-logger');

const {
  server,
} = require('./config');

const app = new Koa();

app.use(logger());
app.use(bodyParser());
app.use(cors());
app.use(helmet());
app.use(compression());
app.use(responseTime({
  hrtime: true,
}));

const {
  PORT,
} = server;

require('./routes')({
  app,
});

app.listen(PORT, () => {
  console.info(`The server is up and running on ${PORT}`);
});
