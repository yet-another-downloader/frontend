export abstract class EventBusMessage {
  channel: string;
  data: any;
}

export class DownloadVideoEventBusMessage extends EventBusMessage{

  constructor(public url: string) {
    super();
    this.channel = 'DownloadVideoEventBusMessage';
  }

}



