type PerformanceTiming = { type: string; value: number };

export type FP = PerformanceTiming;
export type FCP = PerformanceTiming;
export type CLS = PerformanceTiming;
export type FIP = PerformanceTiming;
export type LCP = {
  type: string;
  value: {
    eventName: string;
    target: any;
    startTime: number;
    delay: number;
    eventHandleTime: number;
  };
};

export type NavigationTiming = {
  type: string;
  value: {
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
};
