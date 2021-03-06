import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {HttpClientModule} from "@angular/common/http";
import {AddGenericLinkComponent} from './add-generic-link/add-generic-link.component';
import {DownloadProviderService} from "./downloader/download-provider.service";
import {ServerDownloadProviderService} from "./downloader/server-download-provider.service";
import {FormsModule} from "@angular/forms";
import { DownloadListComponent } from './download-list/download-list.component';
import {AppConfig} from "./core/app-config";
import {DownloadStore} from "./download/download-store";
import {AppGlobalEventBusService} from "./store/app-global-event-bus.service";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {NgbPaginationModule, NgbTooltipModule} from "@ng-bootstrap/ng-bootstrap";
import {FileSizePipe} from "./download-list/file-size-pipe";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddGenericLinkComponent,
    DownloadListComponent,
    FileSizePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    NgbTooltipModule,
    NgbPaginationModule
  ],
  providers: [

    {provide: DownloadProviderService, useClass: ServerDownloadProviderService},
    {provide: AppConfig, useClass: AppConfig},
    {provide: DownloadStore, useClass: DownloadStore},
    {provide: AppGlobalEventBusService, useClass: AppGlobalEventBusService}

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
