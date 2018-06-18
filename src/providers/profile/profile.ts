import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http, Response, RequestOptions, Headers, URLSearchParams } from '@angular/http';
import { NativeStorage } from '@ionic-native/native-storage';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';

/*
  Generated class for the ProfileProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProfileProvider {

  profileUrl: string = 'https://reviewpointsgp.herokuapp.com/api/users/me';
  userReviewsUrl: string = 'https://reviewpointsgp.herokuapp.com/api/users/getReviews';
  updateFcmTokenUrl: string = 'https://reviewpointsgp.herokuapp.com/api/users/getReviews';

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
  editUser(token, userData) {
    var headers = new Headers();
    headers.append('Access-Control-Allow-Headers', 'Authorization');
    headers.append('Authorization', 'Bearer' + ' ' + token);
    headers.append('Content-Type', 'application/json');
    return this.http.put(this.profileUrl, userData, { headers: headers }).map((res) => { return res.json() }).toPromise();
  }
  getUserReviews(token) {
    var headers = new Headers();
    headers.append('Access-Control-Allow-Headers', 'Authorization');
    headers.append('Authorization', 'Bearer' + ' ' + token);
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.userReviewsUrl, { headers: headers }).map((res) => { return res.json() }).toPromise();
  }
  updateUserFcmToken(userToken, FcmToken) {
    var headers = new Headers();
    headers.append('Access-Control-Allow-Headers', 'Authorization');
    headers.append('Authorization', 'Bearer' + ' ' + userToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.updateFcmTokenUrl, FcmToken, { headers: headers }).map((res) => { return res.json() }).toPromise();

  }
}
