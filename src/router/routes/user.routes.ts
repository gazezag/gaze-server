import { createRouter } from '../useRouterContext';
import * as redisFunc from '../../service/redis/index';
import { Cache } from '../../service/cache/index';
const { routerConfig, get } = createRouter('user');

get('/get-name', async ctx => {
  // TODO LYH
  // if (!(await redisFunc.set('user_lyh', 'demo'))) {
  //   ctx.throw(400, '失败');
  // }
  const myCache = new Cache({ cacheLimitAmount: 2 });
  const value = JSON.stringify({ name: 'LYH', age: '20' });
  console.log('set-result', value);

  myCache.setVal({
    key: 'a',
    value
  });
  ctx.body = 'Ethan Teng';
});

get('/get-age', async ctx => {
  ctx.body = '23';
});

export default routerConfig;
