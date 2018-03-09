export class DownloadStatus {

  percent: number;
  msg: string;

}

export class DownloadElement {

  id: string;
  downloadStatus = new DownloadStatus();
}
