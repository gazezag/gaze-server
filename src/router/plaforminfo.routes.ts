import Router from 'koa-router';
import { PlatformInfoDTO } from '../types/platformInfo';
import { platformInfoController } from '../controller/platformInfo.controller';

const router = new Router({ prefix: '/plaform-info' });

router
  /**
   * this route is used to process Image Request
   */
  .get('/empty.gif', async (ctx, next) => {
    const data: PlatformInfoDTO = JSON.parse(decodeURIComponent(ctx.search).slice(1));

    // data is stored and pushed here
    await platformInfoController(ctx, data);
    await next();
  })
  /**
   * Beacon Request and Ajax Request will be handled here
   */
  .post('/add', async (ctx, next) => {
    const cotnentType = ctx.request.headers['content-type'];

    // use different 'Content-Type' to distinguish what kind of request it is
    const data: PlatformInfoDTO =
      cotnentType === 'application/x-www-form-urlencoded'
        ? JSON.parse(Object.keys(ctx.request.body)[0]).data // no better way to deal with it here for the time being
        : cotnentType === 'application/json; charset=utf-8'
        ? ctx.request.body
        : {};

    ctx.response.status = 200;
    ctx.response.body = 'OK';

    await platformInfoController(ctx, data);
    await next();
  });

export default router;
