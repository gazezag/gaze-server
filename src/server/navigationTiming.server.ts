import { execute, sql } from '../model/mysql';
import { TableName } from '../config';
import { getKeyList, getValueList } from '../utils/objectHandler';
import { NavigationTimingDTO, NavigationTimingPO } from '../types/navigationTiming';

/**
 * @description store and verify the data
 * @param { NavigationTimingDTO } navigationTimingDTO data collected by SDK
 */
export const navigationTimingServer = async (navigationTimingDTO: NavigationTimingDTO) => {
  const { time, value } = navigationTimingDTO;

  const navigationTimingPO: NavigationTimingPO = {
    time,
    ...value
  };

  // store data into database
  const [_, err] = await execute(
    sql()
      .insert()
      .into(TableName.navigationTiming)
      .choose(getKeyList(navigationTimingPO))
      .values(getValueList(navigationTimingPO))
      .end()
  );

  if (err) {
    // TODO handle the error
    console.log(`Error ${JSON.stringify(err)}`);
    return err;
  }

  return navigationTimingPO;
};
