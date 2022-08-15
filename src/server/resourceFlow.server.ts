import { execute, sql } from '../model/mysql';
import { TableName } from '../config';
import { getKeyList, getValueList } from '../utils/objectHandler';
import { ResourceFlowDTO, ResourceFlowItemPO, ResourceFlowPO } from '../types/resourceFlow';

/**
 * @description store and verify the data
 * @param { ResourceFlowDTO } resourceFlowDTO data collected by SDK
 */
export const resourceFlowServer = async (
  resourceFlowDTO: ResourceFlowDTO
): Promise<ResourceFlowPO> => {
  const { time, value: flowListDTO } = resourceFlowDTO;

  const flowListPO: Array<ResourceFlowItemPO> = flowListDTO.map(itemDTO => {
    return {
      groupId: time,
      ...itemDTO
    };
  });

  const works = flowListPO.reduce((works, itemPO) => {
    works.push(
      execute(
        sql()
          .insert()
          .into(TableName.resourceFlow)
          .choose(getKeyList(itemPO))
          .values(getValueList(itemPO))
          .end()
      )
    );

    return works;
  }, [] as Array<Promise<any>>);

  const resultList = await Promise.all(works);
  resultList.forEach(res => {
    // TODO handle error
    if (res[1]) {
      console.log(res[1]);

      return;
    }
  });

  return {
    time,
    value: flowListPO
  };
};
