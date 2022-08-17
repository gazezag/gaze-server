import Router from 'koa-router';
import { fetchAllServer } from '../server/fetchAll.server';

const router = new Router({ prefix: '/info' });

router
  /**
   * return all data within a time period
   */
  .get('/fetch-all', async (ctx, next) => {
    const { begin, end } = ctx.query;
    const data = await fetchAllServer(parseInt(begin as string), parseInt(end as string));

    ctx.response.set('Access-Control-Allow-Origin', '*');
    ctx.response.status = 200;
    ctx.response.body = data;

    await next();
  });

export default router;
