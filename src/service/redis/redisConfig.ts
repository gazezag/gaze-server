import Config from '../../config/config';

export default {
  port: Config.REDIS.PORT, // Redis port
  host: Config.REDIS.HOST, // Redis host
  password: Config.REDIS.PASSWORD,
  db: Config.REDIS.DB
};
