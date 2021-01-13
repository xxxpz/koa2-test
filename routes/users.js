const Router = require('koa-router');
const usersRouter = new Router({
  prefix: '/users',
});

usersRouter.get('/', async (ctx) => {
  ctx.state = {
    title: 'users',
  };
  console.log(ctx);
  await ctx.render('index', ctx.state);
});

module.exports = usersRouter;
