import Koa from 'koa';
import koaBodyParser from 'koa-bodyparser';
import cors from 'koa-cors';
import staticResource from 'koa-static';
import Router from 'koa-router';
import { join } from 'path';
import { walkDir } from '../utils/fileHandler';
import { ServerConfig } from '../config/config';
import { catchError } from './catchError';

class Init {
  private app: Koa<Koa.DefaultState, Koa.DefaultContext>;

  constructor(app: Koa<Koa.DefaultState, Koa.DefaultContext>) {
    this.app = app;
  }

  initAll() {
    this.initBodyParser();
    this.initRouter();
    this.initCors();
    this.initStatic();
    this.initCatchError();
  }

  initBodyParser() {
    this.app.use(koaBodyParser());
  }

  initRouter() {
    const reg = /.+\.routes\.ts$/;
    walkDir(join(`${process.cwd()}/${ServerConfig.baseUrl}/router/`), (filePath: string) => {
      if (reg.test(filePath)) {
        const router: Router = require(filePath).default;
        this.app.use(router.routes());
      }
    });
  }

  initCors() {
    this.app.use(cors());
  }

  initStatic() {
    this.app.use(staticResource(join(__dirname, './static')));
  }

  initCatchError() {
    this.app.use(catchError);
  }
}

export const initMiddleware = (app: Koa<Koa.DefaultState, Koa.DefaultContext>) => {
  new Init(app).initAll();
};
