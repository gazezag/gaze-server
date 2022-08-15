export type PerformanceTimingDTO<T = number> = { type: string; time: number; value: T };

export type FP = PerformanceTimingDTO;
export type FCP = PerformanceTimingDTO;
export type CLS = PerformanceTimingDTO;
export type FID = PerformanceTimingDTO;
export type LCP = PerformanceTimingDTO<{
  eventName: string;
  target: any;
  startTime: number;
  delay: number;
  eventHandleTime: number;
}>;

export interface PerformanceTimingPO {
  time: number;
  type: string;
  value: number;
}
