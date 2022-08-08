export default class Config {
  // redis
  public static readonly REDIS = {
    PORT: 6379,
    HOST: '127.0.0.1',
    PASSWORD: '',
    DB: 4
  };
}

export const ServerConfig = {
  port: 3001,
  baseUrl: process.env.NODE_ENV === 'development' ? 'src' : 'dist/src'
};
