import Router from 'koa-router';
import { sendSSE } from '../core/sse';

const router = new Router({ prefix: '/test-sse' });

router.get('/sse', async ctx => {
  const id = Date.now();
  const event = 'custom-event-1';
  const data = {
    name: 'Ethan Teng',
    age: 22
  };

  sendSSE(id, event, data)(ctx);
});

export default router;
