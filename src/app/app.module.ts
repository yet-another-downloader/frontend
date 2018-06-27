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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddGenericLinkComponent,
    DownloadListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [

    {provide: DownloadProviderService, useClass: ServerDownloadProviderService}

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
