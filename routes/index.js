module.exports = (router) => {
  router.get('/welcome', async function (ctx, next) {
    ctx.state = {
      title: '路由测试',
    };

    await ctx.render('welcome', { title: ctx.state });
  });
};
