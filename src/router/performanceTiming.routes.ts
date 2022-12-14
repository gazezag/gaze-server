import Router from 'koa-router';
import { PerformanceTimingDTO } from '../types/performanceTiming';
import { performanceTimingController } from '../controller/performanceTiming.controller';

const router = new Router({ prefix: '/performance-timing' });

router
  /**
   * this route is used to process Image Request
   */
  .get('/empty.gif', async (ctx, next) => {
    const data: PerformanceTimingDTO = JSON.parse(decodeURIComponent(ctx.search).slice(1));

    // data is stored and pushed here
    await performanceTimingController(data);
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
        ? ctx.request.body //! bug here  .data?
        : {};

    ctx.response.set('Access-Control-Allow-Origin', '*');
    ctx.response.status = 200;
    ctx.response.body = 'OK';

    await performanceTimingController(data);
    await next();
  });

export default router;
