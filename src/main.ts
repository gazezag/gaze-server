import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import staticResource from 'koa-static';
import cors from 'koa-cors';
import router from './router/index';
import { join } from 'path';

const app = new Koa();

app.use(staticResource(join(__dirname, './static')));
app.use(cors());
app.use(bodyParser());

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3001);
