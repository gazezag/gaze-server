import { store } from '../core/store';
import { deviceInfoServer, pageinfoServer } from '../server/platformInfo.server';
import { PlatformInfoDTO } from '../types/platformInfo';
import { MessagePriority, ServerSendEventName } from '../config';
import { getMessage } from '../utils/wrapMessage';

/**
 * @description store and push the data which has accepted from the router
 * @param { PlatformInfoDTO } platformInfoDTO data collected by SDK
 */
export const platformInfoController = async (platformInfoDTO: PlatformInfoDTO) => {
  // store and clean up the data
  const deviceInfo = await deviceInfoServer(platformInfoDTO);
  const pageInfo = await pageinfoServer(platformInfoDTO);

  // enqueue data to store
  store.enqueue(getMessage(deviceInfo, ServerSendEventName.deviceInfo), MessagePriority.BASIC_INFO);
  store.enqueue(getMessage(pageInfo, ServerSendEventName.pageInfo), MessagePriority.BASIC_INFO);
};
