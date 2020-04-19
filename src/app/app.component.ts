import { Component } from '@angular/core';
import { ApiService } from './service/api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'car-warehouse';
  isAuthenticated: boolean;
  totalCount: number;
  authRequest: any = {
    "username": "frank",
    "password": "password"
  };

  constructor(private _service: ApiService) {}

  ngOnInit() {
    this.getAccessToken(this.authRequest);
  }

  public getAccessToken(authRequest) {
    let resp = this._service.genrateToken(authRequest);
    resp.subscribe(webToken => {
      this._service.token = webToken;
      this.isAuthenticated = true;
    });
  }



}
