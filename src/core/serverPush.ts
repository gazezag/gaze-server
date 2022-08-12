// TODO
export enum PRIORITY {
  URGENT,
  ORDINARY,
  UNIMPORTANT
}

interface Message {
  priority: PRIORITY;
  data: any;
}

export class Pusher {
  private queue: Array<Message>;

  constructor() {
    this.queue = [];
  }
}
