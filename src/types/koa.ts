import { ParameterizedContext } from 'koa';
import Router from 'koa-router';

export type KoaContext = ParameterizedContext<any, Router.IRouterParamContext<any, {}>, any>;
