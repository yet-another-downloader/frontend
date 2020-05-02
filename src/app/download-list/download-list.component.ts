import { Component, OnInit } from '@angular/core';
import {DownloadElement} from "../downloader/download.models";
import {DownloadProviderService} from "../downloader/download-provider.service";
import {DownloadStore} from "../download/download-store";
import { faTimes, faCheck,faSpinner,faRedo } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-download-list',
  templateUrl: './download-list.component.html',
  styleUrls: ['./download-list.component.scss']
})
export class DownloadListComponent implements OnInit {

  items: DownloadElement[] = [];
  count = 0;
  private sortField = 'lastUpdateDate';
  private sortDirection = 'DESC';
  faTimes = faTimes;
  faCheck = faCheck;
  faSpinner = faSpinner;
  faRedo = faRedo;
  page = 1;
  pageSize = 10;

  constructor(private dw: DownloadProviderService, private downloadStore: DownloadStore) { }

  private getCriteria() {
    return `${this.sortField}:${this.sortDirection}`;
  }

  ngOnInit() {
    this.dw.getAll(this.getCriteria(), this.pageSize, this.page * this.pageSize).subscribe(x => {
      this.items = x.items;
      this.count = x.count;
    })
  }

  retryDownload(item: DownloadElement) {
    this.downloadStore.download(item.url);
  }

  sortByStatus() {
    if (this.sortDirection === 'DESC') {
      this.sortDirection = 'ASC';
    } else {
      this.sortDirection = 'DESC';
    }

    this.ngOnInit();
  }

}
