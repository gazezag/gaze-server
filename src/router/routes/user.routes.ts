import { createRouter } from '../useRouterContext';
import * as redisFunc from '../../service/redis/index';
const { routerConfig, get } = createRouter('user');

get('/get-name', async ctx => {
  // TODO LYH
  if (!(await redisFunc.set('user_lyh', 'demo'))) {
    ctx.throw(400, '失败');
  }
  ctx.body = 'Ethan Teng';
});

get('/get-age', async ctx => {
  ctx.body = '23';
});

export default routerConfig;
