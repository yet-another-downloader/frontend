import {Injectable} from '@angular/core';
import {DownloadProviderService} from "./download-provider.service";
import {DownloadElement, DownloadStatus} from "./download.models";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {map, filter} from "rxjs/operators";
import {AppConfig} from "../core/app-config";

@Injectable()
export class ServerDownloadProviderService extends DownloadProviderService {

  constructor(private httpClient: HttpClient, private appConfig: AppConfig) {
    super();
  }

  download(url: string, type: string): Observable<DownloadStatus> {
    // type = 3 ; partialText
    // type = 4 : Response
    // https://github.com/angular/angular/blob/master/packages/common/http/src/xhr.ts
    return this.httpClient.get(`${this.appConfig.getServerBaseUrl()}/v1/downloader/download_video/TtIN4_RZwZE/${type}`,
      {observe: 'events', reportProgress: true, responseType: 'text'}).pipe(
      map(response => response as any),
      map((x: any) => {

        if (x.type !== 3) {
          return null;
        }

        let strings = x.partialText.split("\n");
        if (strings.length > 0) {
          if (strings.length == 2) {
            // full response as second string is empty
            return strings[0];
          }

          // last element is empty string ("")
          return strings[strings.length - 2];
        } else {
          //that is error
          // full response
          return null;
        }
      }),
      filter(x => {
        return x != null && x !== '';
      }),
      map((x: string) => {

        // TODO: FIX json decode double quotes
        let s = this.escapeDoubleQuotes(x);
        return JSON.parse(s)
      })
    );
  }

  private escapeDoubleQuotes(str) {
    return str.replace(/\\([\s\S])|(")/g, "$1$2"); // thanks @slevithan!
  }

  getAll(): Observable<DownloadElement[]> {
    return this.httpClient.get(`${this.appConfig.getServerBaseUrl()}/v1/downloader/list_items`) as any;
  }

}
