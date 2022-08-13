import mysql from 'mysql';
import mysqlConfing from './mysqlConfig';
import { isArray } from '../../utils/typeJudgement';
import { lineToHumpObject } from './entityTransform';

interface ExecuteResult {
  msg: string;
  state: number;
  results: any;
  fields: Array<mysql.FieldInfo>;
}

interface ExecuteError {
  error: mysql.MysqlError;
  msg: string;
}

/**
 * @description get a database connection from the pool,
 *              and execute a SQL statement with the connection
 * @param { string } sql SQL statements to be executed
 * @return return a tuple wraped in a resolved promsie
 *         first data in tuple is the result of this execution
 *         second data in tuple is error while it panic
 *         they are mutually exclusive
 * @example
 * // get the result
 * const [res] = await execute('this is a SQL');
 *
 * // handle the error
 * const [res, err] = await execute('this is a SQL');
 * if(err) {
 *    // do something...
 * }
 */
const usePool =
  (pool: mysql.Pool) =>
  (sql: string): Promise<Array<ExecuteResult | ExecuteError | null>> => {
    return new Promise(resolve => {
      pool.getConnection((error, connection) => {
        if (error) {
          resolve([
            null,
            {
              error,
              msg: `Database connection error: ${error.message}`
            }
          ]);
          return;
        }

        const queryCallback: mysql.queryCallback = (err, res?, fields?) => {
          // release the connection when done with the connection
          connection.release();

          if (err) {
            resolve([
              null,
              {
                error: err,
                msg: err.sqlMessage || 'Execution error'
              }
            ]);
          } else {
            resolve([
              {
                msg: 'OK',
                state: 1,
                results: isArray(res) ? res.map(lineToHumpObject) : res,
                fields: fields || []
              },
              null
            ]);
          }
        };
        pool.query(sql, queryCallback);
      });
    });
  };

const getExecute = () => {
  const pool = mysql.createPool(mysqlConfing);

  pool.on('connection', connection => {
    console.log(`Connection ${connection.threadId} connected`);
  });

  pool.on('release', connection => {
    console.log(`Connection ${connection.threadId} released`);
  });

  return usePool(pool);
};

export const execute = getExecute();
export * from './sqlBuilder';
