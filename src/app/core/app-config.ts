import {Injectable} from "@angular/core";

@Injectable()
export class AppConfig {

  public getServerBaseUrl() {
    return `http://localhost:8080`;
  }

}
