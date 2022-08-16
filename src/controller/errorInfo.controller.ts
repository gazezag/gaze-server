import { store } from '../core/store';
import { ErrorInfoDTO, ErrorInfoVO } from '../types/errorInfo';
import { MessagePriority, ServerSendEventName } from '../config';
import { getMessage } from '../utils/wrapMessage';
import { errorInfoServer } from '../server/errorInfo.server';

/**
 * @description store and push the data which has accepted from the router
 * @param { ErrorInfoDTO } errorInfoDTO data collected by SDK
 */
export const errorInfoController = async (errorInfoDTO: ErrorInfoDTO) => {
  // store and clean up the data
  const errorInfo = await errorInfoServer(errorInfoDTO);

  // enqueue data to store
  const { serverSendEventName, info } = errorInfo as ErrorInfoVO;
  store.enqueue(getMessage(info, serverSendEventName), MessagePriority.ERROR);
  if (serverSendEventName == ServerSendEventName.jsError) {
    store.enqueue(
      getMessage(errorInfo?.stackTrace, ServerSendEventName.stackTrace),
      MessagePriority.ERROR
    );
  }
};
