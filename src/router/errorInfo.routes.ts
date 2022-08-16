import Router from 'koa-router';
import { errorInfoController } from '../controller/errorInfo.controller';
import { ErrorInfoDTO } from '../types/errorInfo';
import { navigationTimingController } from '../controller/navigationTiming.controller';

const router = new Router({ prefix: '/error-info' });

router
  /**
   * this route is used to process Image Request
   */
  .get('/empty.gif', async (ctx, next) => {
    const data: ErrorInfoDTO = JSON.parse(decodeURIComponent(ctx.search).slice(1));

    // data is stored and pushed here

    await errorInfoController(data);
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

    await errorInfoController(data);
    await next();
  });

export default router;
