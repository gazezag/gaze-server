export interface PlatformInfoDTO {
  type: string;
  time: number;
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

export interface DeviceInfoPO {
  time: number;
  os_type: string;
  os_version: string;
  browser_type: string;
  browser_version: string;
  language: string;
}

export interface PageInfoPO {
  time: number;
  origin: string;
  url: string;
  title: string;
  referer: string;
}
