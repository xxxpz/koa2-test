const Router = require('koa-router');
const orderRouter = new Router({
  prefix: '',
});

orderRouter.get('/', async (ctx) => {
  ctx.state = {
    title: 'Koa',
  };
  console.log(ctx);
  await ctx.render('index', ctx.state);
});

module.exports = orderRouter;
