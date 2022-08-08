import Koa from 'koa';
import { initMiddleware } from './core/init';
import { ServerConfig } from './config/config';

const app = new Koa();

initMiddleware(app);

app.listen(ServerConfig.port);
