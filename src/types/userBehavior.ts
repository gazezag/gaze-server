interface BehaviorItem<T> {
  type: string;
  page: string;
  time: number;
  detail: T;
}

// router change
export type RouterChangeItem = BehaviorItem<{
  method: 'Hash' | 'History';
  href: string;
  hash?: string;
  pathname?: string;
}>;
export type RouterChangeInfo = Array<RouterChangeItem>;

// http request
export type HttpItem = BehaviorItem<{
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
export type HttpInfo = Array<HttpItem>;

// user's operation
export type OperationItem = BehaviorItem<{
  type: 'click' | 'keydown' | 'dblclick';
  target: any; // TODO
  count: number;
  id: string;
  classList: Array<string>;
  tagName: string;
  innerText: string;
}>;
export type OperationInfo = Array<OperationItem>;
