export const isInstance = (o: Object, c: any) => o instanceof c;

export const getKeys = (o: Object): Array<PropertyKey> => Reflect.ownKeys(o);

export const has = (o: Object, k: PropertyKey): boolean => Reflect.has(o, k);

export const get = (o: Object, k: PropertyKey): any => {
  if (has(o, k)) {
    return Reflect.get(o, k);
  }

  throw new Error(`${k.toString()} not exist`);
};

// can clear the sdie-effect
export const set = (o: Object, k: PropertyKey, v: any): boolean => Reflect.set(o, k, v);

export const getValueList = (o: object): Array<any> => getKeys(o).map(k => get(o, k));
