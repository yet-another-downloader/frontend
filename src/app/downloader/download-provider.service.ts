import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {DownloadElement, DownloadStatus} from "./download.models";

export abstract class DownloadProviderService {


  abstract download(url: string): Observable<DownloadStatus>;

  abstract getAll(): Observable<DownloadElement[]>;

}
