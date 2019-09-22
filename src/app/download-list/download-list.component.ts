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
  private sortField = 'lastUpdateDate';
  private sortDirection = 'DESC';
  faTimes = faTimes;
  faCheck = faCheck;
  faSpinner = faSpinner;
  faRedo = faRedo;

  constructor(private dw: DownloadProviderService, private downloadStore: DownloadStore) { }

  private getCriteria() {
    return `${this.sortField}:${this.sortDirection}`;
  }

  ngOnInit() {
    this.dw.getAll(this.getCriteria()).subscribe(x => {
      this.items = x;
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
