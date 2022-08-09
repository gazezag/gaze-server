import mysql from 'mysql';
import { DataBaseFailed } from 'src/core/httpException';
import { isArray } from 'src/utils/typeJudgement';
import { lineToHumpObject } from './entityTransform';
import pool from './pool';

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
const execute = (sql: string): Promise<Array<ExecuteResult | ExecuteError | null>> => {
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

export class BasicSqlOperation {
  constructor() {}

  async insert(sql: string): Promise<ExecuteResult> {
    const [res, err] = await execute(sql);
    err && this.errorHandler(err as ExecuteError);

    // TODO

    return res as ExecuteResult;
  }

  async delete(sql: string): Promise<ExecuteResult> {
    const [res, err] = await execute(sql);
    err && this.errorHandler(err as ExecuteError);

    // TODO

    return res as ExecuteResult;
  }

  async update(sql: string): Promise<ExecuteResult> {
    const [res, err] = await execute(sql);
    err && this.errorHandler(err as ExecuteError);

    // TODO

    return res as ExecuteResult;
  }

  async select(sql: string): Promise<ExecuteResult> {
    const [res, err] = await execute(sql);
    err && this.errorHandler(err as ExecuteError);
    return res as ExecuteResult;
  }

  private errorHandler(error: ExecuteError) {
    throw new DataBaseFailed(error.msg);
  }
}

export const useSql = () => {
  const insert = async (sql: string): Promise<ExecuteResult> => {
    const [res, err] = await execute(sql);
    err && errorHandler(err as ExecuteError);

    // TODO

    return res as ExecuteResult;
  };

  const select = async (sql: string): Promise<ExecuteResult> => {
    const [res, err] = await execute(sql);
    err && errorHandler(err as ExecuteError);

    // TODO

    return res as ExecuteResult;
  };

  const errorHandler = (error: ExecuteError) => {
    throw new DataBaseFailed(error.msg);
  };

  return {
    // TODO
  };
};
