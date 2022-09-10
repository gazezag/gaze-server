# gaze-server

一个前端性能监控平台的中间服务器

## Todo

### refactor

1. 发布脚本

2. 构建脚本 (swc? esbuild? babel?)

3. 把更多的数据计算工作移到服务端来

4. 产品呈现方式?(docker? web? app?)

5. 也许可以用二分查找优化一下优先级队列的查找

## usage

1. 克隆项目
2. 配置数据库
   ```typescript
   // src/config/index.ts
   export const MySQLConfig = {
     DB_NAME: 'gaze',
     HOST: '127.0.0.1',
     PORT: 3306,
     USER_NAME: 'username', // 你的数据库用户名
     PASSWORD: 'password', // 你的数据库密码
     CONNECTION_LIMIT: 60 * 60 * 1000,
     CONNECT_TIMEOUT: 1000 * 60 * 60,
     ACQUIRE_TIMEOUT: 60 * 60 * 1000,
     TIMEOUT: 1000 * 60 * 60 * 1000
   };
   ```
3. 执行 sql 文件( `src/gaze.sql` )

4. 跑一下
   ```sh
     npm run dev
   ```

## Implement

![3241662828972_ pic](https://user-images.githubusercontent.com/76992456/189495359-7aded4e1-afaf-4042-b11e-3cee72804417.jpg)

### Processing of requests

各数据的处理都大同小异, 仅以 performance timing 数据作为例子展示一条完整的数据链路

#### Router

主要用来接受请求

> src/router/performanceTiming.routes.ts

```typescript
const router = new Router({ prefix: '/performance-timing' });
router
  // 这个路由用来接收 ImageRequest
  .get('/empty.gif', async (ctx, next) => {
    const data: PerformanceTimingDTO = JSON.parse(decodeURIComponent(ctx.search).slice(1));

    // 数据会在 controller 进行处理
    await performanceTimingController(data);
    await next();
  })
  // Beacon 和 Ajax 走这里
  .post('/add', async (ctx, next) => {
    const cotnentType = ctx.request.headers['content-type'];

    // 使用不同的 content-type 来区分是 Beacon 还是 Ajax
    const data =
      cotnentType === 'application/x-www-form-urlencoded'
        ? JSON.parse(Object.keys(ctx.request.body)[0]).data // 这里暂时没有更好的数据方式...
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

存储从请求中接收到的数据

> src/controller/performanceTiming.controller.ts

```typescript
export const performanceTimingController = async (
  performanceTimingDTO: PerformanceTimingDTO<any>
) => {
  // 在 server 中进行数据的清洗以及持久化
  const performanceTiming = await performanceTimingServer(performanceTimingDTO);

  // 入队服务器内部 store 等待推送
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

  // 执行 SQL 语句进行持久化
  const [_, err] = await execute(
    sql()
      .insert()
      .into(TableName.performanceTiming)
      .choose(getKeyList(performanceTimingPO))
      .values(getValueList(performanceTimingPO))
      .end()
  );

  if (err) {
    // TODO 错误处理
    console.log(`Error ${JSON.stringify(err)}`);
    return err;
  }

  return performanceTimingPO;
};
```

### SSE

该架构主要使用 SSE(Server Send Events) 来进行服务端推送

> src/router/sse.rotues.ts

```typescript
const router = new Router();

router.get('/get-data', async ctx => {
  // 使用转换流来搭建信道
  const stream = new Transform();
  stream._transform = (msg, _, cb) => {
    stream.push(msg);
    cb();
  };

  // 配置响应头
  ctx.response.set('Content-Type', 'text/event-stream');
  ctx.response.set('Cache-Control', 'no-cache');
  ctx.response.set('Connection', 'keep-alive');
  ctx.response.set('Access-Control-Allow-Origin', '*');
  ctx.response.status = 200;
  ctx.response.body = stream;

  // 轮询 Store
  const timer = setInterval(() => {
    if (!store.isEmpty()) {
      // 写入流
      stream.write(store.dequeue());
    }
  }, 100);

  stream.on('close', () => {
    clearInterval(timer);
  });
});

export default router;
```

客户端会像这样接受服务端推送的数据

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

这里使用了单例模式来解决全局实例不唯一的问题

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

  // 这里应该可以用二分查找优化效率
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
