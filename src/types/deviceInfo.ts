export interface DeviceInfo {
  type: string;
  value: {
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
}
