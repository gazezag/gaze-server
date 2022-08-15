import { store } from '../core/store';
import { MessagePriority, ServerSendEventName } from '../config';
import { getMessage } from '../utils/wrapMessage';
import { NavigationTimingDTO } from '../types/navigationTiming';
import { navigationTimingServer } from '../server/navigationTiming.server';

/**
 * @description store and push the data which has accepted from the router
 * @param { NavigationTimingDTO } navigationTimingDTO data collected by SDK
 */
export const navigationTimingController = async (navigationTimingDTO: NavigationTimingDTO) => {
  // store and clean up the data

  const navigationTiming = await navigationTimingServer(navigationTimingDTO);

  // enqueue data to store
  store.enqueue(
    getMessage(navigationTiming, ServerSendEventName.navigationTiming),
    MessagePriority.PERFORMANCE_DATA
  );
};
