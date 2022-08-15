export interface ResourceFlowItem {
  time: number;
  name: string;
  transferSize: number;
  initiatorType: 'script' | 'img' | 'other';
  startTime: number;
  responseEnd: number;
  DNS: number;
  initialConnect: number;
  SSL: number;
  request: number;
  TTFB: number;
  transmit: number;
  contentDownload: number;
}

export interface ResourceFlowDTO {
  time: number;
  type: string;
  value: Array<ResourceFlowItem>;
}

export interface ResourceFlowItemPO extends ResourceFlowItem {
  groupId: number; // use the sending time as ID temporarily
}

export interface ResourceFlowPO {
  time: number;
  value: Array<ResourceFlowItemPO>;
}
