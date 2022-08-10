import Router from 'koa-router';
import { sendSSE } from '../core/sse';

const router = new Router({ prefix: '/test-sse' });

router.get('/sse', async ctx => {
  sendSSE({
    id: Date.now(),
    event: 'custom-event-1',
    data: {
      name: 'Ethan Teng',
      age: 22
    },
    retry: 2000
  })(ctx);
});

export default router;
