import Router from 'koa-router';
import { createPusher } from '../core/sse';

const router = new Router({ prefix: '/test-sse' });

router.get('/sse', async ctx => {
  const id = Date.now();
  const event = 'custom-event-1';
  const data = {
    name: 'Ethan Teng',
    age: 22
  };

  createPusher(ctx)(id, event, data);
});

export default router;
