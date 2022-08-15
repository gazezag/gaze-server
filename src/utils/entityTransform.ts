import { get, getKeys, set } from './objectHandler';
import { startsWith } from './stringHandler';
import { isString } from './typeJudgement';

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
export const humpToLine = (str: PropertyKey): string => {
  if (typeof str !== 'string') {
    return String(str);
  }

  if (isUppercase(str)) {
    return str.toLowerCase();
  }

  return (str as string).replace(/([A-Z])/g, '_$1').toLowerCase();
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

const isUppercase = (str: string): boolean => {
  return /^[A-Z]+$/.test(str);
};
