import { execute, sql } from '../model/mysql';
import { ServerSendEventName, TableName } from '../config';
import { getKeyList, getValueList, isEmpty } from '../utils/objectHandler';
import {
  CorsErrorDetail,
  CorsErrorInfoPO,
  ErrorInfoDTO,
  ErrorInfoVO,
  HttpErrorDetail,
  HttpErrorInfoPO,
  JsErrorDetail,
  JsErrorInfoPO,
  PromiseRejectDetail,
  ResourceErrorDetail,
  ResourceErrorInfoPO,
  StackTraceItemPO
} from '../types/errorInfo';

/**
 * @description store and verify the data
 * @param { ErrorInfoDTO } errorInfoDTO data collected by SDK
 */
export const errorInfoServer = async (errorInfoDTO: ErrorInfoDTO) => {
  const works: Array<Promise<any>> = [];
  const errorInfo = getErrorInfo(errorInfoDTO, works);

  // store data into database
  const resultList = await Promise.all(works);
  resultList.forEach(res => {
    if (res[1]) {
      // TODO
      console.log(res[1]);
    }
  });

  return errorInfo;
};

const getErrorInfo = (infoDTO: ErrorInfoDTO, works: Array<Promise<any>>) => {
  switch (infoDTO.type) {
    case 'js':
    case 'unhandledrejection':
      return jsErrorHandler(infoDTO, works);
    case 'resource':
      return resourceErrorHandler(infoDTO, works);
    case 'http':
      return httpErrorHandler(infoDTO, works);
    case 'cors':
      return corsErrorHandler(infoDTO, works);
  }
};

const jsErrorHandler = (infoDTO: ErrorInfoDTO, works: Array<Promise<any>>): ErrorInfoVO => {
  const { errorUid, time, message, detail } = infoDTO;
  const { type: errorType, stackTrace } = detail as JsErrorDetail | PromiseRejectDetail;

  const jsErrorInfoPO: JsErrorInfoPO = {
    time,
    errorUid,
    message: isEmpty(message) ? '' : message,
    errorType: isEmpty(errorType) ? 'UnHandledRejection' : errorType,
    reason: (detail as PromiseRejectDetail).reason || '',
    stackTraceUid: time
  };

  const traceInfoPO: Array<StackTraceItemPO> = stackTrace.map(traceInfoDTO => {
    const { filename, functionName, col, line } = traceInfoDTO;
    const traceInfoItemPO: StackTraceItemPO = {
      groupId: time,
      filename,
      functionName,
      col: col || 0,
      line: line || 0
    };

    works.push(
      execute(
        sql()
          .insert()
          .into(TableName.stackTrace)
          .choose(getKeyList(traceInfoItemPO))
          .values(getValueList(traceInfoItemPO))
          .end()
      )
    );

    return traceInfoItemPO;
  });

  works.push(
    execute(
      sql()
        .insert()
        .into(TableName.jsError)
        .choose(getKeyList(jsErrorInfoPO))
        .values(getValueList(jsErrorInfoPO))
        .end()
    )
  );

  return {
    serverSendEventName: ServerSendEventName.jsError,
    info: jsErrorInfoPO,
    stackTrace: traceInfoPO
  };
};

const resourceErrorHandler = (infoDTO: ErrorInfoDTO, works: Array<Promise<any>>): ErrorInfoVO => {
  const { time, errorUid, message, detail } = infoDTO;
  const { src, type: errorType, outerHTML, tagName } = detail as ResourceErrorDetail;

  const resourceErrorInfoPO: ResourceErrorInfoPO = {
    time,
    errorUid,
    message,
    errorType: errorType || '',
    src: src || '',
    outerHtml: outerHTML || '',
    tagName: tagName || ''
  };

  works.push(
    execute(
      sql()
        .insert()
        .into(TableName.resourceError)
        .choose(getKeyList(resourceErrorInfoPO))
        .values(getValueList(resourceErrorInfoPO))
        .end()
    )
  );

  return {
    serverSendEventName: ServerSendEventName.resourceError,
    info: resourceErrorInfoPO
  };
};

const httpErrorHandler = (infoDTO: ErrorInfoDTO, works: Array<Promise<any>>): ErrorInfoVO => {
  const { time, errorUid, message, detail } = infoDTO;
  const { status, statusText, response } = detail as HttpErrorDetail;

  const httpErrorInfoPO: HttpErrorInfoPO = {
    time,
    errorUid,
    message,
    status: status,
    statusText: statusText,
    response: response
  };

  works.push(
    execute(
      sql()
        .insert()
        .into(TableName.httpError)
        .choose(getKeyList(httpErrorInfoPO))
        .values(getValueList(httpErrorInfoPO))
        .end()
    )
  );

  return {
    serverSendEventName: ServerSendEventName.httpError,
    info: httpErrorInfoPO
  };
};

const corsErrorHandler = (infoDTO: ErrorInfoDTO, works: Array<Promise<any>>): ErrorInfoVO => {
  const { time, errorUid, message, detail } = infoDTO;
  const { target } = detail as CorsErrorDetail;

  const corsErrorInfoPO: CorsErrorInfoPO = {
    time,
    errorUid,
    message,
    tagName: target || '' // TODO
  };

  works.push(
    execute(
      sql()
        .insert()
        .into(TableName.corsError)
        .choose(getKeyList(corsErrorInfoPO))
        .values(getValueList(corsErrorInfoPO))
        .end()
    )
  );

  return {
    serverSendEventName: ServerSendEventName.corsError,
    info: corsErrorInfoPO
  };
};
