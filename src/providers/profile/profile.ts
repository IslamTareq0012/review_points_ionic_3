import { Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage';
import 'rxjs/add/operator/map';
import { Http, Response, RequestOptions, Headers, URLSearchParams } from '@angular/http';

/*
  Generated class for the ProfileProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProfileProvider {

  profileUrl: string = 'http://localhost:3000/api/users/me';

  constructor(private nativeStorage: NativeStorage, public http: Http) {
    console.log('Hello ProfileProvider Provider');
  }

  getUser(token) {
    var headers = new Headers();
    headers.append('Access-Control-Allow-Headers', 'Authorization');
    headers.append('Authorization', 'Bearer' + ' ' + token);
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.profileUrl, { headers: headers }).map((res) => { return res.json() }).toPromise();
  }

}
