export interface NavigationTimingDTO {
  type: string;
  time: number;
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
}

export interface NavigationTimingPO {
  time: number;
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
}
