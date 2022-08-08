import redisConfig from './redisConfig';
import Redis from 'ioreDis';
const redis = new Redis(redisConfig);
export default redis;

setInterval(() => {
  redis.exists('0');
}, 15000);
