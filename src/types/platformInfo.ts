import { UID } from './UID';

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
  uid: UID;
  time: number;
  os_type: string;
  os_version: string;
  browser_type: string;
  browser_version: string;
  language: string;
}

export interface PageInfoPO {
  uid: UID;
  time: number;
  origin: string;
  url: string;
  title: string;
  referer: string;
}
