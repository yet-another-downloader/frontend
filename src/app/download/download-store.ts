import {Injectable, OnInit} from "@angular/core";
import {AppGlobalEventBusService} from "../store/app-global-event-bus.service";
import {DownloadVideoEventBusMessage} from "../store/app-global-event-bus.message";

@Injectable()
export class DownloadStore {

  constructor(private appGlobalEventBusService: AppGlobalEventBusService) {
  }

  public download(url: string) {
    this.appGlobalEventBusService.publish(new DownloadVideoEventBusMessage(url));
  }

  public getPublisher() {
    return this.appGlobalEventBusService.of(DownloadVideoEventBusMessage);
  }

}
