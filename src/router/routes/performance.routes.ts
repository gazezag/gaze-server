import { createRouter } from '../useRouterContext';

const { routerConfig, get } = createRouter('performance');

get('/1.jpg', async ctx => {
  ctx.body = ctx.toJSON.toString();
});

export default routerConfig;
