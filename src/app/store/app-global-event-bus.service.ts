import {Injectable} from '@angular/core';
import {EventBusMessage} from './app-global-event-bus.message';
import {Observable, Subject} from "rxjs";
import {StringUtils} from "../core/string.utils";
import { filter,map } from 'rxjs/operators';

@Injectable()
export class AppGlobalEventBusService {

    private static TAG = 'AppGlobalEventBusService';
    private eventBus: Subject<EventBusMessage>;

    constructor() {
        console.info(`Init ${AppGlobalEventBusService.TAG}`);
        this.eventBus = new Subject<EventBusMessage>();
    }

    public publish<T extends EventBusMessage>(message: T): void {

        if (!message.channel || StringUtils.isEmpty(message.channel)) {
            throw new Error('Empty channel' + JSON.stringify(message));
        }

        this.eventBus.next({channel: message.channel, data: message});
    }

    public of<T extends EventBusMessage>(messageType: { new(...args: any[]): T }): Observable<T> {
        const channel = new messageType().channel;
        return this.eventBus.pipe(filter(m => m.channel === channel)).pipe(map(m => m.data));
    }

}
