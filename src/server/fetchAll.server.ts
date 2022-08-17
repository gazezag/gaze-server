import { execute, ExecuteResult, sql } from '../model/mysql';
import { TableName } from '../config';
import { del, set } from '../utils/objectHandler';
import { lineToHump } from '../utils/entityTransform';

type Stuff = { tableName: string; works: Promise<Array<any>> };
type Data = Record<string, Array<any>>;

/**
 * @description query all data within that time period according to the incoming time interval
 * @param { Number } begin the time starting of this inquiry
 * @param { Number } end the time end of this query
 */
export const fetchAllServer = async (begin: number, end: number): Promise<Data> => {
  const data = {} as Data;

  await Promise.all(
    Object.values(TableName)
      .map(tableNmae => {
        return {
          tableName: tableNmae,
          works:
            tableNmae === TableName.stackTrace
              ? queryDataByTime(tableNmae, begin, end, true)
              : queryDataByTime(tableNmae, begin, end)
        };
      })
      // .map(async (stuff: Stuff) => set(data, lineToHump(String(stuff.tableName)), await stuff.works));
      .map(async (stuff: Stuff) => {
        const lines = await stuff.works;
        set(
          data,
          lineToHump(String(stuff.tableName)),
          lines.map(line => {
            del(line, 'id');
            return line;
          })
        );
      })
  );

  return data;
};

// query the info
const queryDataByTime = async (
  tableName: TableName,
  begin: number,
  end: number,
  isStackTrace = false
): Promise<Array<any>> => {
  const [res, err] = await execute(
    sql()
      .select()
      .all()
      .from(tableName)
      .where(isStackTrace ? 'group_id' : 'time')
      .between(begin, end)
      .end()
  );

  if (err) {
    // TODO handle Error
    console.log(err);
  }

  return (res as ExecuteResult).results;
};
