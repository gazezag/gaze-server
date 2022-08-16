import { MessagePriority } from 'src/config';
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

  private constructor() {
    this.messageQueue = [];
  }

  static instance(): Store {
    if (!this._instance) {
      this._instance = new Store();
    }

    return this._instance;
  }

  enqueue(message: Message, priority: MessagePriority) {
    const item = {
      priority,
      value: message
    };

    if (this.isEmpty()) {
      this.messageQueue.push(item);
    } else {
      // for (let i = 0; i < this.messageQueue.length; i++) {
      //   const cur = this.messageQueue[i];
      //   if (priority >= cur.priority) {
      //     this.messageQueue.splice(i, 0, item);
      //     return;
      //   }
      // }
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
}

export const store = Store.instance();
