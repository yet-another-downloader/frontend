import {Observable} from "rxjs";
import {DownloadElement, DownloadList, DownloadStatus} from "./download.models";

export abstract class DownloadProviderService {

  abstract download(url: string, type: string): Observable<DownloadStatus>;

  abstract getAll(sort: string, limit: number, offset: number): Observable<DownloadList>;

}
