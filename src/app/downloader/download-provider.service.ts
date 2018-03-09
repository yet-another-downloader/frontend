import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {DownloadStatus} from "./download.models";

export abstract class DownloadProviderService {


  abstract download(url: string): Observable<DownloadStatus>;

}
