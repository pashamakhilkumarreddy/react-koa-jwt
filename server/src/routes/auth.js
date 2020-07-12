const Router = require('koa-router');

const {
  login,
  register,
} = require('../controllers');

const router = new Router();

router.post('/register', register);
router.post('/login', login);

module.exports = router;
