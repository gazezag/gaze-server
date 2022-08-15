import { store } from '../core/store';
import { ResourceFlowDTO } from '../types/resourceFlow';
import { MessagePriority, ServerSendEventName } from '../config';
import { getMessage } from '../utils/wrapMessage';
import { resourceFlowServer } from '../server/resourceFlow.server';

/**
 * @description store and push the data which has accepted from the router
 * @param { ResourceFlowDTO } resourceFlowDTO data collected by SDK
 */
export const resourceFlowController = async (resourceFlowDTO: ResourceFlowDTO) => {
  // store and clean up the data
  const resourceFlow = await resourceFlowServer(resourceFlowDTO);

  // enqueue data to store
  store.enqueue(
    getMessage(resourceFlow, ServerSendEventName.resourceFlow),
    MessagePriority.RESOURCE_FLOW
  );
};
