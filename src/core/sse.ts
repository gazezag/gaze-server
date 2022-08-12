import { PassThrough } from 'stream';
import { KoaContext } from '../types/koa';
import { get, has } from '../utils/objectHandler';

interface SSEData {
  id: string | number;
  event: string;
  data: any;
  retry: number;
}

export const createPusher = (ctx: KoaContext) => {
  return (id: string | number, event: string, data: any, retry = 2000) => {
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
      stream.write(transformToSSEData({ id, event, data, retry }));
    }, 500);

    stream.on('close', () => {
      console.log(`SSE connection[${data.id}] closed`);
      clearInterval(timer);
    });
  };
};

const transformToSSEData = (o: SSEData) => {
  return (
    ['id', 'event', 'data', 'retry']
      .filter(k => has(o, k))
      .map(k => {
        const value = get(o, k);
        return `${k}:${k === 'data' ? JSON.stringify(value) : value}`;
      })
      .join('\n') + '\n\n'
  );
};
