export * from './static';

export const ServerConfig = {
  BASE_URL: '',
  PORT: 3001,
  PUSH_INTERVAL: 500,
  ACCESS_LIFE_TIME: 60 * 60 * 1000
};

export const MySQLConfig = {
  DB_NAME: 'gaze',
  HOST: '127.0.0.1',
  PORT: 3306,
  USER_NAME: 'root',
  PASSWORD: '62632170',
  CONNECTION_LIMIT: 60 * 60 * 1000,
  CONNECT_TIMEOUT: 1000 * 60 * 60,
  ACQUIRE_TIMEOUT: 60 * 60 * 1000,
  TIMEOUT: 1000 * 60 * 60 * 1000
};

export const DefaultDateFormat = 'YYYY-MM-DD HH:mm:ss';

export enum MessagePriority {
  ERROR = 1,
  PERFORMANCE_DATA = 2,
  BASIC_INFO = 2,
  RESOURCE_FLOW = 2,
  USER_ACTION = 3
}
