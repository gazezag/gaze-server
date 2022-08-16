import { ServerSendEventName } from '../config/static';

export interface ErrorStep {
  filename: string;
  functionName: string;
  line: number;
  col: number;
}
// JS
export interface JsErrorDetail {
  type: string;
  stackTrace: Array<ErrorStep>;
}

// Unhandle Rejection
export interface PromiseRejectDetail {
  type: string;
  stackTrace: Array<ErrorStep>;
  reason: string;
}

// Resource Error
export interface ResourceErrorDetail {
  src?: string;
  type?: string;
  outerHTML?: string;
  tagName?: string;
}

// HTTP Error
export interface HttpErrorDetail {
  status: number;
  response: string;
  statusText: string;
}

// CROS Error
export interface CorsErrorDetail {
  target: string;
}

export interface ErrorInfoDTO {
  type: string;
  errorUid: string;
  time: number;
  message: string;
  detail:
    | JsErrorDetail
    | PromiseRejectDetail
    | ResourceErrorDetail
    | HttpErrorDetail
    | CorsErrorDetail;
}

export interface StackTraceItemPO extends ErrorStep {
  groupId: number;
}

interface ErrorInfoPO {
  time: number;
  errorUid: string;
  message: string;
}

export interface JsErrorInfoPO extends ErrorInfoPO {
  errorType: string;
  reason?: string;
  stackTraceUid: number; // use the sending time as ID temporarily
}

export interface ResourceErrorInfoPO extends ErrorInfoPO {
  errorType: string;
  src: string;
  outerHtml: string;
  tagName: string;
}

export interface HttpErrorInfoPO extends ErrorInfoPO {
  status: number;
  statusText: string;
  response: string;
}

export interface CorsErrorInfoPO extends ErrorInfoPO {
  tagName: string;
}

export interface ErrorInfoVO {
  serverSendEventName: ServerSendEventName;
  info: JsErrorInfoPO | ResourceErrorInfoPO | HttpErrorInfoPO | CorsErrorInfoPO;
  stackTrace?: Array<StackTraceItemPO>;
}
