const Router = require('koa-router');
const usersRouter = require('./users');
const orderRouter = require('./order');

const router = new Router();

router.use(usersRouter.routes(), usersRouter.allowedMethods());
router.use(orderRouter.routes(), orderRouter.allowedMethods());

module.exports = router;
