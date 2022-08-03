import { createRouter } from '../useRouterContext';

const { routerConfig, get } = createRouter('user');

get('/get-name', async ctx => {
  ctx.body = 'Ethan Teng';
});

get('/get-age', async ctx => {
  ctx.body = '23';
});

export default routerConfig;
