export const ServerConfig = {
  BASE_URL: '/api',
  PORT: 3001
};

export const MySQLConfig = {
  DB_NAME: 'gaze',
  HOST: '127.0.0.1',
  PORT: 3306,
  USER_NAME: 'admin',
  PASSWORD: '123456',
  CONNECTION_LIMIT: 60 * 60 * 1000,
  CONNECT_TIMEOUT: 1000 * 60 * 60 * 1000,
  ACQUIRE_TIMEOUT: 60 * 60 * 1000,
  TIMEOUT: 1000 * 60 * 60 * 1000
};

export const DefaultDateFormat = 'YYYY-MM-DD HH:mm:ss';
