const Router = require('koa-router');

const router = new Router();

router.get('/', (ctx) => {
  ctx.response.status = 200;
  ctx.body = {
    error: false,
    status: 200,
  };
});

module.exports = router;
