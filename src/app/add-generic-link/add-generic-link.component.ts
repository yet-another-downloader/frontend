import {Component, NgZone, OnInit} from '@angular/core';
import {DownloadProviderService} from "../downloader/download-provider.service";
import {DownloadElement} from "../downloader/download.models";
import {DownloadStore} from "../download/download-store";

const DOWNLOAD_TYPE_YOUTUBE = "YOUTUBE";

@Component({
  selector: 'app-add-generic-link',
  templateUrl: './add-generic-link.component.html',
  styleUrls: ['./add-generic-link.component.scss']
})
export class AddGenericLinkComponent implements OnInit {

  public addLink: string = '';

  downloadElements: DownloadElement[] = [];

  constructor(private downloadProviderService: DownloadProviderService, private downloadStore: DownloadStore, private ngZone: NgZone) {
  }

  ngOnInit() {
    this.downloadStore.getPublisher().subscribe(x => {
      this.ngZone.run(() => {
        this.addLink = x.url;
        this.doDownload(x.url);
      })
    })
  }

  availableDownload() {
    return this.addLink.length > 0;
  }

  addToDownload() {
    let url = this.addLink;
    this.downloadStore.download(url);
  }

  private doDownload(url: string) {
    this.downloadProviderService.download(url, DOWNLOAD_TYPE_YOUTUBE).subscribe(x => {
      this.ngZone.run(() => {

        // TODO: send event to redraw in download-list component

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
    });
  }

}
