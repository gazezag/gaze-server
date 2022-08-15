import { store } from '../core/store';
import { MessagePriority, ServerSendEventName } from '../config';
import { getMessage } from '../utils/wrapMessage';
import { PerformanceTimingDTO } from '../types/performanceTiming';
import { performanceTimingServer } from '../server/performanceTiming.server';

/**
 * @description store and push the data which has accepted from the router
 * @param { PerformanceTimingDTO } performanceTimingDTO data collected by SDK
 */
export const performanceTimingController = async (
  performanceTimingDTO: PerformanceTimingDTO<any>
) => {
  // store and clean up the data
  const performanceTiming = await performanceTimingServer(performanceTimingDTO);

  // enqueue data to store
  store.enqueue(
    getMessage(performanceTiming, ServerSendEventName.performanceTiming),
    MessagePriority.PERFORMANCE_DATA
  );
};
