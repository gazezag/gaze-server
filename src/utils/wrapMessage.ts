import { Message } from '../types/message';
import { ServerConfig, ServerSendEventName } from '../config';

export const getMessage = (data: any, eventName: ServerSendEventName, interval = 0): Message => {
  return {
    id: Date.now(),
    data,
    event: eventName,
    retry: interval || ServerConfig.PUSH_INTERVAL
  };
};
