import Koa from 'koa';
import koaBodyParser from 'koa-bodyparser';
import cors from 'koa2-cors';
import serve from 'koa-static';
import Router from 'koa-router';
import { join } from 'path';
import { walkDir } from '../utils/fileHandler';
import { catchError } from './catchError';

class Init {
  private app: Koa<Koa.DefaultState, Koa.DefaultContext>;

  constructor(app: Koa<Koa.DefaultState, Koa.DefaultContext>) {
    this.app = app;
  }

  initAll() {
    this.initCors();
    this.initBodyParser();
    this.initRouter();
    this.initStatic();
    this.initCatchError();
  }

  initCors() {
    this.app.use(cors());
  }

  initBodyParser() {
    this.app.use(koaBodyParser());
  }

  initRouter() {
    const reg = /.+\.routes\.ts$/;
    walkDir(join(`${process.cwd()}/${'src'}/router/`), (filePath: string) => {
      if (reg.test(filePath)) {
        const router: Router = require(filePath).default;
        this.app.use(router.routes());
      }
    });
  }

  initStatic() {
    // init page resource
    this.app.use(
      serve(join(__dirname, '../static/page'), {
        index: 'index.html'
      })
    );

    // init image resource
    this.app.use(serve(join(__dirname, '../static')));
  }

  initCatchError() {
    this.app.use(catchError);
  }
}

export const initMiddleware = (app: Koa<Koa.DefaultState, Koa.DefaultContext>) => {
  new Init(app).initAll();
};
