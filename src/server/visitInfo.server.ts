import { VisitInfoDTO, VisitInfoPO } from '../types/visitInfo';
import { execute, sql } from '../model/mysql';
import { TableName } from '../config';
import { getKeyList, getValueList } from '../utils/objectHandler';

/**
 * @description store and verify the data
 * @param { VisitInfoDTO } visitInfoDTO data collected by SDK
 */
export const visitInfoServer = async (visitInfoDTO: VisitInfoDTO): Promise<VisitInfoPO> => {
  const [_, err] = await execute(
    sql()
      .insert()
      .into(TableName.visitInfo)
      .choose(getKeyList(visitInfoDTO))
      .values(getValueList(visitInfoDTO))
      .end()
  );

  if (err) {
    // TODO handle error
    console.log(err);
  }

  return visitInfoDTO;
};
