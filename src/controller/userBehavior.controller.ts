import { store } from '../core/store';
import { MessagePriority, ServerSendEventName } from '../config';
import { getMessage } from '../utils/wrapMessage';
import { userBehaviorServer } from '../server/userBehavior.server';
import { UserBehaviorDTO } from '../types/userBehavior';

/**
 * @description store and push the data which has accepted from the router
 * @param { UserBehaviorDTO } userBehaviorDTO data collected by SDK
 */
export const userBehaviorController = async (userBehaviorDTO: UserBehaviorDTO) => {
  // store and clean up the data
  const userBehaviorInfo = await userBehaviorServer(userBehaviorDTO);

  // enqueue data to store
  store.enqueue(
    getMessage(userBehaviorInfo.routerChangeInfo, ServerSendEventName.routerChange),
    MessagePriority.USER_ACTION
  );
  store.enqueue(
    getMessage(userBehaviorInfo.httpInfo, ServerSendEventName.http),
    MessagePriority.USER_ACTION
  );
  store.enqueue(
    getMessage(userBehaviorInfo.operationInfo, ServerSendEventName.operation),
    MessagePriority.USER_ACTION
  );
};
