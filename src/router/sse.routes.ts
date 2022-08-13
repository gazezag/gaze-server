import Router from 'koa-router';
import { store } from '../core/store';
import { createPusher } from '../core/sse';

const router = new Router();

router.get('/get-data', async ctx => {
  setInterval(function () {
    if (!store.isEmpty()) {
      // TODO
      createPusher(ctx)(store.dequeue()!);
    }
  }, 1000);
});

export default router;
