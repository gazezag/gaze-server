import Router from 'koa-router';

interface RouterConfig {
  prefix: string;
  router: Router;
}

export const createRouter = (prefix: string) => {
  // e.g: 'user' => '/user'
  prefix = /^\/\w+/.test(prefix) ? prefix : `/${prefix}`;

  const router = new Router();
  const { get, post, put, link, unlink, head, options, patch, del } = router;

  return {
    routerConfig: {
      prefix,
      router
    },

    // change 'this' to this router
    // e.g: router.get() => get()
    get: get.bind(router),
    post: post.bind(router),
    put: put.bind(router),
    link: link.bind(router),
    unlink: unlink.bind(router),
    head: head.bind(router),
    options: options.bind(router),
    patch: patch.bind(router),
    del: del.bind(router)
  };
};

export const getRouter = (routes: Array<RouterConfig>): Router => {
  const router = new Router();

  // register all child routers
  routes.forEach(({ prefix, router: childRouter }) => {
    router.use(prefix, childRouter.routes(), childRouter.allowedMethods());
  });

  // return main router
  return router;
};
