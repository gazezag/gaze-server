import { MySQLConfig } from '../../config/index';

export default {
  host: MySQLConfig.HOST,
  port: MySQLConfig.PORT,
  user: MySQLConfig.USER_NAME,
  password: MySQLConfig.PASSWORD,
  database: MySQLConfig.DB_NAME,
  connectionLimit: MySQLConfig.CONNECTION_LIMIT,
  connectTimeout: MySQLConfig.CONNECT_TIMEOUT,
  acquireTimeout: MySQLConfig.ACQUIRE_TIMEOUT,
  timeout: MySQLConfig.TIMEOUT,

  multipleStatements: true
};
