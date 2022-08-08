import Router from 'koa-router';
import { Success, ParameterException, AuthFailed } from '../core/httpException';

const router = new Router({ prefix: '/api' });

router.get('/test', ctx => {
  const { id } = ctx.request.body;
  const token = ctx.header['authorization'] || ctx.cookies.get('authorization');
  if (!token) {
    throw new AuthFailed('未登录');
  }
  if (typeof id !== 'number') {
    throw new ParameterException('缺少参数id');
  }

  throw new Success('text');
});

export default router;
