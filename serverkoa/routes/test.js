var Router = require('koa-router');
var router = new Router();
console.log(2)
router.get('/abc', (ctx, next) => {
  ctx.body = 'Hello 1223323';
});

module.exports = router
