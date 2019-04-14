import { Component, OnInit } from '@angular/core';
import {DownloadElement} from "../downloader/download.models";
import {DownloadProviderService} from "../downloader/download-provider.service";
import {DownloadStore} from "../download/download-store";

@Component({
  selector: 'app-download-list',
  templateUrl: './download-list.component.html',
  styleUrls: ['./download-list.component.scss']
})
export class DownloadListComponent implements OnInit {

  items: DownloadElement[] = [];

  constructor(private dw: DownloadProviderService, private downloadStore: DownloadStore) { }

  ngOnInit() {
    this.dw.getAll().subscribe(x => {
      this.items = x;
    })
  }

  retryDownload(item: DownloadElement) {
    this.downloadStore.download(item.url);
  }

}
