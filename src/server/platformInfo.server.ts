import { PlatformInfoDTO, DeviceInfoPO, PageInfoPO } from '../types/platformInfo';
import { execute, sql } from '../model/mysql';
import { TableName } from '../config';
import { getValueList } from '../utils/objectHandler';

/**
 * @description store and verify the data
 * @param { PlatformInfoDTO } platformInfo data collected by SDK
 */
export const deviceInfoServer = async (platformInfo: PlatformInfoDTO) => {
  const { time } = platformInfo;
  const { os, browser, language } = platformInfo.value;

  const deviceInfoPO: DeviceInfoPO = {
    uid: time, // TODO
    time,
    os_type: os.type,
    os_version: os.version,
    browser_type: browser.type,
    browser_version: browser.version,
    language
  };

  // TODO I think it is necessary to save the keys of all data tables and reuse them directly
  // store data into database
  const [_, err] = await execute(
    sql()
      .insert()
      .into(TableName.deviceInfo)
      .choose([
        'uid',
        'time',
        'os_type',
        'os_version',
        'browser_type',
        'browser_version',
        'language'
      ])
      .values(getValueList(deviceInfoPO))
      .end()
  );

  if (err) {
    // TODO handle the error
    console.log(`Error ${JSON.stringify(err)}`);
    return err;
  }

  return deviceInfoPO;
};

export const pageinfoServer = async (platformInfo: PlatformInfoDTO) => {
  const { time } = platformInfo;
  const { origin, url, title, referer } = platformInfo.value;

  const pageInfoPO: PageInfoPO = {
    uid: time, // TODO
    time,
    origin,
    url,
    title,
    referer
  };

  const [_, err] = await execute(
    sql()
      .insert()
      .into(TableName.pageInfo)
      .choose(['uid', 'time', 'origin', 'url', 'title', 'referer'])
      .values(getValueList(pageInfoPO))
      .end()
  );

  if (err) {
    // TODO handle the error
    console.log(`Error ${JSON.stringify(err)}`);
    return err;
  }

  return pageInfoPO;
};
