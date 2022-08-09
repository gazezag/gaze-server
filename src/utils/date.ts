import moment from 'moment';
import { DefaultDateFormat } from '../config/index';

/**
 * 格式化时间
 * @param date
 * @param pattern
 * @returns
 */
export function format(date: Date, pattern = DefaultDateFormat) {
  return moment(date).format(pattern);
}
