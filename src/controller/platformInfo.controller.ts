import { createPusher } from '../core/sse';
import { deviceInfoServer, pageinfoServer } from '../server/platformInfo.server';
import { KoaContext } from '../types/koa';
import { PlatformInfoDTO } from '../types/platformInfo';

/**
 * @description store and push the data which has accepted from the router
 * @param { KoaContext } ctx context object of router
 * @param { PlatformInfoDTO } platformInfoDTO data collected by SDK
 */
export const platformInfoController = async (ctx: KoaContext, platformInfoDTO: PlatformInfoDTO) => {
  // store and clean up the data
  const deviceInfo = await deviceInfoServer(platformInfoDTO);
  const pageInfo = await pageinfoServer(platformInfoDTO);

  // push data to client page
  const push = createPusher(ctx);
  push(Date.now(), 'device-info', deviceInfo);
  push(Date.now(), 'page-info', pageInfo);
};
