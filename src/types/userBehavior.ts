interface BehaviorItemDTO<T> {
  type: string;
  page: string;
  time: number;
  detail: T;
}

// router change
export type RouterChangeItemDTO = BehaviorItemDTO<{
  method: 'Hash' | 'History';
  href: string;
  hash?: string;
  pathname?: string;
}>;
export interface RouterChangeInfoDTO {
  time: number;
  value: Array<RouterChangeItemDTO>;
}

export interface RouterChangePO {
  time: number;
  groupId: number;
  page: string;
  method: string;
  href: string;
  hash: string;
  pathname: string;
}

// http request
export type HttpItemDTO = BehaviorItemDTO<{
  method: 'GET' | 'POST' | 'PUT' | 'HEAD' | 'PATCH' | 'HEAD';
  url: string;
  headers: {
    [header: string]: string;
  };
  body: string; // TODO
  status: number;
  statusText: string;
  requestTime: number;
  responseTime: number;
  response: string;
}>;
export type HttpInfoDTO = Array<HttpItemDTO>;

export interface HttpInfoPO {
  time: number;
  groupId: number;
  page: string;
  method: string;
  url: string;
  headers: string;
  body: string;
  status: number;
  statusText: string;
  requestTime: number;
  responseTime: number;
  response: string;
}

// user's operation
export type OperationItemDTO = BehaviorItemDTO<{
  type: 'click' | 'keydown' | 'dblclick';
  target: any; // TODO
  count: number;
  id: string;
  classList: Array<string>;
  tagName: string;
  innerText: string;
}>;
export type OperationInfoDTO = Array<OperationItemDTO>;

export interface OperationInfoPO {
  time: number;
  groupId: number;
  page: string;
  type: string;
  target: string;
  count: number;
  domId: string;
  classList: string;
  tagName: string;
  innerText: string;
}

export interface UserBehaviorItemDTO {
  type: string;
  page: string;
  time: number;
  detail: any;
}

export interface UserBehaviorDTO {
  time: number;
  value: Array<UserBehaviorItemDTO>;
}

export interface UserBehaviorInfoPO {
  routerChangeInfo: Array<RouterChangePO>;
  httpInfo: Array<HttpInfoPO>;
  operationInfo: Array<OperationInfoPO>;
}
