import {Injectable} from "@angular/core";

@Injectable()
export class AppConfig {

  public getServerBaseUrl() {
    // TODO: refactor
    if (window.location.origin.indexOf("localhost") > 0) {
      return location.origin;
    }
    return `http://localhost:8080`;
  }

}
