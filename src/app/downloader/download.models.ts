export class DownloadStatus {

  percent: number;
  msg: string;

}

export class DownloadElement {

  id: string;
  downloadStatus = new DownloadStatus();
  partUrl: string;
  createdDate: Date;
  lastUpdateDate: Date;
  status: string;
  uploadedPercentage: string;
  url: string;
}
