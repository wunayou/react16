const Koa = require('koa');
const middlewares = require('./middlewares')

const app = new Koa();
middlewares(app)

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.on('error', err => {
    log.error('server error', err)
  });

  
app.listen(3000);