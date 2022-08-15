import Router from 'koa-router';
import { navigationTimingController } from '../controller/navigationTiming.controller';
import { NavigationTimingDTO } from '../types/navigationTiming';

const router = new Router({ prefix: '/navigation-timing' });

router
  /**
   * this route is used to process Image Request
   */
  .get('/empty.gif', async (ctx, next) => {
    const data: NavigationTimingDTO = JSON.parse(decodeURIComponent(ctx.search).slice(1));

    // data is stored and pushed here

    await navigationTimingController(data);
    await next();
  })
  /**
   * Beacon Request and Ajax Request will be handled here
   */
  .post('/add', async (ctx, next) => {
    const cotnentType = ctx.request.headers['content-type'];

    // use different 'Content-Type' to distinguish what kind of request it is
    const data =
      cotnentType === 'application/x-www-form-urlencoded'
        ? JSON.parse(Object.keys(ctx.request.body)[0]).data // no better way to deal with it here for the time being
        : cotnentType === 'application/json; charset=UTF-8'
        ? ctx.request.body.data
        : {};

    ctx.response.status = 200;
    ctx.response.body = 'OK';

    await navigationTimingController(data);
    await next();
  });

export default router;
