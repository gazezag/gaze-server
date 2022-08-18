import Router from 'koa-router';
import { fetchAllController } from '../controller/fetchAll.controller';

const router = new Router({ prefix: '/info' });

router
  /**
   * return all data within a time period
   */
  .get('/fetch-all', async (ctx, next) => {
    const { begin, end } = ctx.query;
    const data = await fetchAllController(begin as string, end as string);

    ctx.response.set('Access-Control-Allow-Origin', '*');
    ctx.response.status = 200;
    ctx.response.body = data;

    await next();
  });

export default router;
