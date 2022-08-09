type Uid = string;

class Cache {
  static instance: Cache;
  static store: Map<Uid, any>;
  static maxSize: number;

  private constructor() {
    Cache.store = new Map<Uid, any>();
    // TODO
    Cache.maxSize = 100000;
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new Cache();
    }

    return this.instance;
  }

  static has(uid: Uid): boolean {
    return this.store.has(uid);
  }

  static set(uid: Uid, data: any): void {
    this.store.set(uid, data);
  }

  static get(uid: Uid): any {
    return this.store.get(uid);
  }

  static clear(): void {
    this.store.clear();
  }
}

export const getCache = () => Cache.getInstance();
