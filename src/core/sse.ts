import { PassThrough } from 'stream';
import { KoaContext } from '../types/koa';

export const createPusher = (ctx: KoaContext) => {
  return (messageStr: string) => {
    const stream = new PassThrough();

    // set socket
    ctx.request.socket.setTimeout(0);
    ctx.request.socket.setNoDelay(true);
    ctx.request.socket.setKeepAlive(true);

    // set headers
    ctx.response.set('Content-Type', 'text/event-stream');
    ctx.response.set('Cache-Control', 'no-cache');
    ctx.response.set('Connection', 'keep-alive');
    ctx.response.set('Access-Control-Allow-Origin', '*');
    ctx.response.status = 200;
    ctx.response.body = stream;

    //! timer is required here, and I don't know why
    const timer = setInterval(() => {
      stream.write(messageStr);
    }, 500);

    stream.on('close', () => {
      clearInterval(timer);
    });
  };
};
