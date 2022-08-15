import { execute, sql } from '../model/mysql';
import { TableName } from '../config';
import { getKeyList, getValueList } from '../utils/objectHandler';
import { PerformanceTimingDTO, PerformanceTimingPO } from '../types/performanceTiming';

/**
 * @description store and verify the data
 * @param { PerformanceTimingDTO } performanceTimingDTO data collected by SDK
 */
export const performanceTimingServer = async (performanceTimingDTO: PerformanceTimingDTO<any>) => {
  const { type, time, value } = performanceTimingDTO;

  const performanceTimingPO: PerformanceTimingPO = {
    time,
    type,
    value: type === 'first-input-delay' ? performanceTimingDTO.value.delay : value
  };

  // store data into database
  const [_, err] = await execute(
    sql()
      .insert()
      .into(TableName.performanceTiming)
      .choose(getKeyList(performanceTimingPO))
      .values(getValueList(performanceTimingPO))
      .end()
  );

  if (err) {
    // TODO handle the error
    console.log(`Error ${JSON.stringify(err)}`);
    return err;
  }

  return performanceTimingPO;
};
