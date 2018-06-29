import {Observable} from "rxjs";
import {DownloadElement, DownloadStatus} from "./download.models";

export abstract class DownloadProviderService {

  abstract download(url: string, type: string): Observable<DownloadStatus>;

  abstract getAll(): Observable<DownloadElement[]>;

}
