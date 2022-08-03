import Koa from 'koa';
import { add } from './add1/add';

const app = new Koa();

app.use(async (ctx: any) => {
  ctx.body = 'Hello World';
  console.log(add(1, 2222));
});

app.listen(3001);
