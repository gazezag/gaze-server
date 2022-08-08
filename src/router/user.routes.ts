import Router from 'koa-router';

const router = new Router({
  prefix: '/user'
});

router
  .get('/hello-world', ctx => {
    ctx.body = 'Hello World';
  })
  .get('/get-name', async (ctx: any) => {
    // TODO LYH
    // if (!(await redisFunc.set('user_lyh', 'demo'))) {
    //   ctx.throw(400, '失败');
    // }

    // const res = await redisFunc.get('user_lyh');
    // ctx.body = 'Ethan Teng' + res;
    ctx.body = 'Ethan Teng';
  })
  .get('/get-age', async (ctx: any) => {
    ctx.body = '23';
  });

export default router;
