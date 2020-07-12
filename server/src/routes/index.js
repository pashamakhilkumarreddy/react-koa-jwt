const auth = require('./auth');

module.exports = ({
  app, // eslint-disable-line no-unused-vars
}) => {
  app.use(auth.routes());
  app.use(auth.allowedMethods());
};
