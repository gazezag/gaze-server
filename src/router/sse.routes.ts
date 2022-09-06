import Router from 'koa-router';
import { store } from '../core/store';
import { Transform } from 'stream';

const router = new Router();

router.get('/get-data', async ctx => {
  const stream = new Transform();
  stream._transform = (msg, _, cb) => {
    stream.push(msg);
    cb();
  };

  // set headers
  ctx.response.set('Content-Type', 'text/event-stream');
  ctx.response.set('Cache-Control', 'no-cache');
  ctx.response.set('Connection', 'keep-alive');
  ctx.response.set('Access-Control-Allow-Origin', '*');
  ctx.response.status = 200;
  ctx.response.body = stream;

  const timer = setInterval(() => {
    if (!store.isEmpty()) {
      stream.write(store.dequeue());
    }
  }, 100);

  stream.on('close', () => {
    clearInterval(timer);
  });
});
// router.get('/get-data', async ctx => {
//   const stream = new PassThrough();

//   // set socket
//   ctx.request.socket.setTimeout(0);
//   ctx.request.socket.setNoDelay(true);
//   ctx.request.socket.setKeepAlive(true);

//   // set headers
//   ctx.response.set('Content-Type', 'text/event-stream');
//   ctx.response.set('Cache-Control', 'no-cache');
//   ctx.response.set('Connection', 'keep-alive');
//   ctx.response.set('Access-Control-Allow-Origin', '*');
//   ctx.response.status = 200;
//   ctx.response.body = stream;

//   //! timer is required here, and I don't know why
//   const timer = setInterval(() => {
//     if (!store.isEmpty()) {
//       stream.write(store.dequeue());
//     }
//   }, 100);

//   stream.on('close', () => {
//     clearInterval(timer);
//   });
// });

export default router;
