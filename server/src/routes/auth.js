const Router = require('koa-router');

const {
  login,
  register,
} = require('../controllers');
const {
  validateAuthFields,
} = require('../middlewares/checkAuthFields');

const router = new Router();

router.post('/register', validateAuthFields, register)
  .post('/login', validateAuthFields, login);

module.exports = router;
