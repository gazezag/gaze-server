import { MessagePriority } from '../config';

export interface Message {
  id: string | number;
  event: string;
  data: any;
  retry: number;
}

export interface MessageItem {
  priority: MessagePriority;
  value: Message;
}
