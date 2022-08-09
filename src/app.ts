import Koa from 'koa';
import { ServerConfig } from './config';
import { initMiddleware } from './core/init';

const app = new Koa();

initMiddleware(app);

app.listen(ServerConfig.PORT);
