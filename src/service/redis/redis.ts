import redisConfig from './redisConfig';
import IoreDis from 'IoreDis';
const redis = new IoreDis(redisConfig);
export default redis;

setInterval(() => {
  redis.exists('0');
}, 15000);
