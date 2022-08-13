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
  private messageQueue: Array<MessageItem>;

  constructor() {
    this.messageQueue = [];
  }

  enqueue(message: Message, priority: MessagePriority) {
    this.messageQueue.forEach((item, i, queue) => {
      if (priority < item.priority) {
        queue.splice(i, 0, {
          priority,
          value: message
        });
      }
    });
  }

  dequeue(): string | null {
    return this.isEmpty() ? null : transformToSSEData(this.messageQueue.shift()?.value!);
  }

  isEmpty(): boolean {
    return this.messageQueue.length === 0;
  }
}

export const store = new Store();
