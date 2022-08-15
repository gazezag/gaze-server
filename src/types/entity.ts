import { ResourceFlowItem } from './resourceFlow';
import { HttpItemDTO, OperationItemDTO, RouterChangeItemDTO } from './userBehavior';

export interface Stuff {
  uid: string;
  deviceInfo: {
    origin: string;
    url: string;
    title: string;
    referer: string;
    os: {
      type: string;
      version: string;
    };
    browser: {
      type: string;
      version: string;
    };
    language: string;
  };
  pagePerformance: {
    FP: number;
    FCP: number;
    CLS: number;
    FIP: number;
    LCP: number; // LCP.delay
  };
  navigation: {
    redirect: number;
    DNS: number;
    TCP: number;
    SSL: number;
    TTFB: number;
    transmit: number;
    domParse: number;
    deferExecuteDuration: number;
    domContentLoadedCallback: number;
    resourceLoad: number;
    domReady: number;
    L: number;
  };
  resourceFlow: Array<ResourceFlowItem>;
  behaviorInfo: {
    routerChange: Array<RouterChangeItemDTO>;
    http: Array<HttpItemDTO>;
    operation: Array<OperationItemDTO>;
  };
}
