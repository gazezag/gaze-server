import { store } from '../core/store';
import { MessagePriority, ServerSendEventName } from '../config';
import { getMessage } from '../utils/wrapMessage';
import { VisitInfoDTO } from '../types/visitInfo';
import { visitInfoServer } from '../server/visitInfo.server';

/**
 * @description store and push the data which has accepted from the router
 * @param { VisitInfoDTO } visitInfoDTO data collected by SDK
 * @param { string } ip the currently requested IP(V4) address
 */
export const visitInfoController = async (visitInfoDTO: VisitInfoDTO, ip: string) => {
  // enqueue data to store while the current IP address does not exist in store
  if (!store.has(ip)) {
    store.add(ip);

    // store and clean up the data
    const visitInfo = await visitInfoServer(visitInfoDTO);
    store.enqueue(getMessage(visitInfo, ServerSendEventName.visitInfo), MessagePriority.BASIC_INFO);
  }
};
