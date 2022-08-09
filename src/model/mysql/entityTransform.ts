import { get, getKeys, set } from '../../utils/objectHandler';
import { startsWith } from '../../utils/stringHandler';
import { isString } from '../../utils/typeJudgement';

/**
 * hello_world -> helloWorld
 */
export const lineToHump = (str: string): string => {
  if (startsWith(str, '_')) {
    return str;
  }

  return str.replace(/\_\w/, (char: string) => char.toUpperCase());
};

/**
 * helloWorld -> hello_world
 */
export const humpToLine = (str = ''): string => {
  if (!isString(str)) {
    return str;
  }

  return str.replace(/([A-Z])/, '_$1').toLowerCase();
};

export const lineToHumpObject = (o: Object) => {
  return getKeys(o).reduce((prev, key) => {
    set(prev, lineToHump(key as string), get(o, key));

    return prev;
  }, {});
};

export const humpToLineObject = (o: Object) => {
  return getKeys(o).reduce((prev, key) => {
    set(prev, humpToLine(key as string), get(o, key));

    return prev;
  }, {});
};
