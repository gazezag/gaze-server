import { execute, sql } from '../model/mysql';
import { TableName } from '../config';
import { getKeyList, getValueList } from '../utils/objectHandler';
import {
  HttpInfoPO,
  HttpItemDTO,
  OperationInfoPO,
  OperationItemDTO,
  RouterChangeItemDTO,
  RouterChangePO,
  UserBehaviorDTO,
  UserBehaviorInfoPO
} from '../types/userBehavior';

/**
 * @description store and verify the data
 * @param { UserBehaviorDTO } userBehaviorDTO data collected by SDK
 */
export const userBehaviorServer = async (
  userBehaviorDTO: UserBehaviorDTO
): Promise<UserBehaviorInfoPO> => {
  const { time, value: infoListDTO } = userBehaviorDTO;
  const routerChangeInfo: Array<RouterChangePO> = [];
  const httpInfo: Array<HttpInfoPO> = [];
  const operationInfo: Array<OperationInfoPO> = [];

  const works = infoListDTO.map(itemDTO => {
    const { type } = itemDTO;
    let stuff = null;

    if (type === 'router-change') {
      stuff = routerChangeHandler(itemDTO, time);
      routerChangeInfo.push(stuff.data);
    } else if (type === 'request') {
      stuff = httpHandler(itemDTO, time);
      httpInfo.push(stuff.data);
    } else {
      stuff = operationHandler(itemDTO, time);
      operationInfo.push(stuff.data);
    }

    return stuff.work;
  });

  const resultList = await Promise.all(works);
  resultList.forEach(res => {
    // TODO handle error
    if (res[1]) {
      console.log(res[1]);

      return;
    }
  });

  return {
    routerChangeInfo,
    httpInfo,
    operationInfo
  };
};

const routerChangeHandler = (
  item: RouterChangeItemDTO,
  groupId: number
): { work: Promise<any>; data: RouterChangePO } => {
  const { time, page, detail } = item;
  const { method, href, hash, pathname } = detail;

  const routerChangeInfoPO: RouterChangePO = {
    groupId,
    time,
    page,
    method,
    href,
    hash: hash || '',
    pathname: pathname || ''
  };

  return {
    work: execute(
      sql()
        .insert()
        .into(TableName.routerChange)
        .choose(getKeyList(routerChangeInfoPO))
        .values(getValueList(routerChangeInfoPO))
        .end()
    ),
    data: routerChangeInfoPO
  };
};

const httpHandler = (
  item: HttpItemDTO,
  groupId: number
): { work: Promise<any>; data: HttpInfoPO } => {
  const { time, page, detail } = item;
  const { method, url, headers, body, status, statusText, requestTime, responseTime, response } =
    detail;

  const httpInfoPO: HttpInfoPO = {
    groupId,
    time,
    page,
    method,
    url,
    headers: JSON.stringify(headers),
    body,
    status,
    statusText,
    requestTime,
    responseTime,
    response
  };

  return {
    work: execute(
      sql()
        .insert()
        .into(TableName.http)
        .choose(getKeyList(httpInfoPO))
        .values(getValueList(httpInfoPO))
        .end()
    ),
    data: httpInfoPO
  };
};

const operationHandler = (
  item: OperationItemDTO,
  groupId: number
): { work: Promise<any>; data: OperationInfoPO } => {
  const { time, page, detail } = item;
  const { type, target, count, id, classList, tagName, innerText } = detail;

  const operationInfoPO: OperationInfoPO = {
    groupId,
    time,
    page,
    type,
    target: String(target),
    count,
    domId: id,
    classList: JSON.stringify(classList),
    tagName,
    innerText
  };

  return {
    work: execute(
      sql()
        .insert()
        .into(TableName.operation)
        .choose(getKeyList(operationInfoPO))
        .values(getValueList(operationInfoPO))
        .end()
    ),
    data: operationInfoPO
  };
};
