import koa from 'koa';
import { isInstance } from 'src/utils/objectHandler';
import { HttpException } from './httpException';

export async function catchError(ctx: koa.Context, next: Function) {
  const { method, path } = ctx;
  try {
    await next();
  } catch (error: any) {
    if (!isInstance(error, HttpException)) {
      ctx.body = {
        msg: 'Unknown Error',
        errorCode: 9999,
        requestUrl: `${method} ${path}`
      };

      ctx.status = 500;
    } else {
      if (error.responseType) {
        ctx.response.type = error.responseType;
      }

      if (error.isBuffer) {
        ctx.body = error.data;
      } else {
        ctx.body = {
          msg: error.message,
          errorCode: error.errorCode,
          data: error.data
        };
      }

      ctx.status = error.code;
    }
  }
}
