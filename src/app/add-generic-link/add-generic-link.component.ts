import { Component, OnInit } from '@angular/core';
import {DownloadProviderService} from "../downloader/download-provider.service";
import {DownloadElement} from "../downloader/download.models";

@Component({
  selector: 'app-add-generic-link',
  templateUrl: './add-generic-link.component.html',
  styleUrls: ['./add-generic-link.component.scss']
})
export class AddGenericLinkComponent implements OnInit {

  public addLink: string = 'TtIN4_RZwZE';

  downloadElements: DownloadElement[] = [];

  constructor(private downloadProviderService: DownloadProviderService) { }

  ngOnInit() {
  }

  addToDonload() {
    let url = this.addLink;
    this.downloadProviderService.download(url).subscribe(x => {

      let find = this.downloadElements.findIndex(l => l.id === url);
      if (find !== -1) {
        let item = this.downloadElements[find];
        if (item.downloadStatus.percent === 100) {
          console.error('100 already', item);
        } else {
          item.downloadStatus = x;
        }
      } else {
        let e = new DownloadElement();
        e.id = url;
        e.downloadStatus = x;
        this.downloadElements.push(e);
      }
      console.log(new Date(), x);
    });
  }

}
