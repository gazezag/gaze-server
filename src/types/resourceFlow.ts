export interface ResourceFlowItem {
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

export interface ResourceFlow {
  type: string;
  value: Array<ResourceFlowItem>;
}
