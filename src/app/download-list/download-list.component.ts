import { Component, OnInit } from '@angular/core';
import {DownloadElement} from "../downloader/download.models";
import {DownloadProviderService} from "../downloader/download-provider.service";

@Component({
  selector: 'app-download-list',
  templateUrl: './download-list.component.html',
  styleUrls: ['./download-list.component.scss']
})
export class DownloadListComponent implements OnInit {

  items: DownloadElement[] = [];

  constructor(private dw: DownloadProviderService) { }

  ngOnInit() {
    this.dw.getAll().subscribe(x => {
      this.items = x;
    })
  }

}
