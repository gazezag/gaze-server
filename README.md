# gaze-server

[中文文档传送门](https://github.com/gazezag/gaze-server/blob/master/README-zh.md)

The server of the front-end performance monitoring platform

## Todo

### refactor

1. release script

2. build script (swc? esbuild? babel?)

3. do more data processing

## usage

1. clone the project
2. configure the database
   ```typescript
   // src/config/index.ts
   export const MySQLConfig = {
     DB_NAME: 'gaze',
     HOST: '127.0.0.1',
     PORT: 3306,
     USER_NAME: 'username', // your username
     PASSWORD: 'password', // your password
     CONNECTION_LIMIT: 60 * 60 * 1000,
     CONNECT_TIMEOUT: 1000 * 60 * 60,
     ACQUIRE_TIMEOUT: 60 * 60 * 1000,
     TIMEOUT: 1000 * 60 * 60 * 1000
   };
   ```
3. execute the sql file( `src/gaze.sql` )

4. run it
   ```sh
     npm run dev
   ```

## Implement

![3241662828972_ pic](https://user-images.githubusercontent.com/76992456/189495388-f4cdc882-a75c-4790-948f-55f14fd2fdc8.jpg)

### Processing of requests

Take the processing of the performance timing data as an example to show a complete data link

#### Router

It is mainly to accept the requests

> src/router/performanceTiming.routes.ts

```typescript
const router = new Router({ prefix: '/performance-timing' });
router
  // this route is used to process Image Request
  .get('/empty.gif', async (ctx, next) => {
    const data: PerformanceTimingDTO = JSON.parse(decodeURIComponent(ctx.search).slice(1));

    // data is stored and pushed here
    await performanceTimingController(data);
    await next();
  })
  // Beacon Request and Ajax Request will be handled here
  .post('/add', async (ctx, next) => {
    const cotnentType = ctx.request.headers['content-type'];

    // use different 'Content-Type' to distinguish what kind of request it is
    const data =
      cotnentType === 'application/x-www-form-urlencoded'
        ? JSON.parse(Object.keys(ctx.request.body)[0]).data // no better way to deal with it here for the time being
        : cotnentType === 'application/json; charset=UTF-8'
        ? ctx.request.body
        : {};

    ctx.response.set('Access-Control-Allow-Origin', '*');
    ctx.response.status = 200;
    ctx.response.body = 'OK';

    await performanceTimingController(data);
    await next();
  });

export default router;
```

#### Controller

store the data which has accepted from the router

> src/controller/performanceTiming.controller.ts

```typescript
export const performanceTimingController = async (
  performanceTimingDTO: PerformanceTimingDTO<any>
) => {
  // store and clean up the data
  const performanceTiming = await performanceTimingServer(performanceTimingDTO);

  // enqueue data to store
  store.enqueue(
    getMessage(performanceTiming, ServerSendEventName.performanceTiming),
    MessagePriority.PERFORMANCE_DATA
  );
};
```

#### Server

> src/server/performanceTiming.server.ts

```typescript
export const performanceTimingServer = async (performanceTimingDTO: PerformanceTimingDTO<any>) => {
  const { type, time, value } = performanceTimingDTO;

  const performanceTimingPO: PerformanceTimingPO = {
    time,
    type,
    value: type === 'first-input-delay' ? performanceTimingDTO.value.delay : value
  };

  // store data into database
  const [_, err] = await execute(
    sql()
      .insert()
      .into(TableName.performanceTiming)
      .choose(getKeyList(performanceTimingPO))
      .values(getValueList(performanceTimingPO))
      .end()
  );

  if (err) {
    // TODO handle the error
    console.log(`Error ${JSON.stringify(err)}`);
    return err;
  }

  return performanceTimingPO;
};
```

### SSE

This server mainly uses SSE(Server Send Events) to implement server-side push

> src/router/sse.rotues.ts

```typescript
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

  // polling the store
  const timer = setInterval(() => {
    if (!store.isEmpty()) {
      stream.write(store.dequeue());
    }
  }, 100);

  stream.on('close', () => {
    clearInterval(timer);
  });
});

export default router;
```

The client will accept it like this

```typescript
const getSourceListener = (target: string) => {
  const source = new EventSource(target);

  const sourceListener = (eventName: string, callback: (e: MessageEvent<string>) => void) => {
    return source.addEventListener(
      eventName,
      callback as EventListenerOrEventListenerObject,
      false
    );
  };

  sourceListener('open', () => {
    console.log('SSE connection established');
  });

  return sourceListener;
};
```

### Store

In order to ensure global sharing of unique instances, singleton mode is used here.

> src/core/store.ts

```typescript
class Store {
  private static _instance: Store;
  private messageQueue: Array<MessageItem>;
  private visited: Set<string>;

  private constructor() {
    this.messageQueue = [];
    this.visited = new Set();
  }

  static instance(): Store {
    if (!this._instance) {
      this._instance = new Store();
    }

    return this._instance;
  }

  // the binary search can be used here to optimize the algorithm
  enqueue(message: Message, priority: MessagePriority) {
    if (isEmpty(message.data)) return;

    const item = {
      priority,
      value: message
    };

    if (this.isEmpty()) {
      this.messageQueue.push(item);
    } else {
      this.messageQueue.some((cur, i) => {
        if (priority >= cur.priority) {
          this.messageQueue.splice(i, 0, item);
          return true;
        }

        return false;
      });
    }
  }

  dequeue(): string | null {
    return this.isEmpty() ? null : transformToSSEData(this.messageQueue.pop()?.value!);
  }

  isEmpty(): boolean {
    return this.messageQueue.length === 0;
  }

  getAll() {
    return this.messageQueue.reduce((prev, cur) => {
      return prev + cur;
    }, '');
  }
}

export const store = Store.instance();
```
