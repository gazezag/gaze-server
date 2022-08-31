import { isEmpty } from '../utils/objectHandler';
import { MessagePriority, ServerConfig } from '../config';
import { Message, MessageItem } from '../types/message';

const transformToSSEData = (o: Message) => {
  return (
    ['id', 'event', 'data', 'retry']
      .filter(k => Reflect.has(o, k))
      .map(k => {
        const value = Reflect.get(o, k);
        return `${k}:${k === 'data' ? JSON.stringify(value) : value}`;
      })
      .join('\n') + '\n\n'
  );
};

class Store {
  private static _instance: Store;
  private messageQueue: Array<MessageItem>;
  private visited: Set<string>;

  private constructor() {
    this.messageQueue = [];
    this.visited = new Set();
  }

  static instance(): Store {
    if (!this._instance) {
      this._instance = new Store();
    }

    return this._instance;
  }

  enqueue(message: Message, priority: MessagePriority) {
    if (isEmpty(message.data)) {
      return;
    }

    const item = {
      priority,
      value: message
    };

    if (this.isEmpty()) {
      this.messageQueue.push(item);
    } else {
      this.messageQueue.some((cur, i) => {
        if (priority >= cur.priority) {
          this.messageQueue.splice(i, 0, item);
          return true;
        }

        return false;
      });
    }
  }

  dequeue(): string | null {
    return this.isEmpty() ? null : transformToSSEData(this.messageQueue.pop()?.value!);
  }

  isEmpty(): boolean {
    return this.messageQueue.length === 0;
  }

  getAll() {
    return this.messageQueue.reduce((prev, cur) => {
      return prev + cur;
    }, '');
  }

  has(item: string): boolean {
    return this.visited.has(item);
  }

  add(item: string) {
    this.visited.add(item);

    // TODO
    setTimeout(() => {
      this.del(item);
    }, ServerConfig.ACCESS_LIFE_TIME);
  }

  del(item: string) {
    this.visited.delete(item);
  }

  claer() {
    this.visited.clear();
  }
}

export const store = Store.instance();
