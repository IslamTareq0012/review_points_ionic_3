import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import { Http, Response, RequestOptions, Headers, URLSearchParams } from '@angular/http';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  loginUrl: string = 'https://reviewpointsgp.herokuapp.com/api/auth/login';
  signupUrl: string = 'https://reviewpointsgp.herokuapp.com/api/auth/signup';
  forgotPasswordUrl: string = 'https://reviewpointsgp.herokuapp.com/api/auth/forgot_password';

  constructor(private http: Http) {
    console.log('Hello AuthProvider Provider');
  }

  login(credentials) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let body: any = { "email": credentials.email, "password": credentials.password };
    return this.http.post(this.loginUrl, body, { headers: headers }).map((res) => { return res.json() }).toPromise();
  }
  SignUp(credentials) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let body: any = {
      "email": credentials.email, "password": credentials.password,
      "resetPasswordToken": credentials.resetPasswordToken,
      "resetPasswordExpires": credentials.resetPasswordExpires,
      "points": credentials.points,
      "notificationToken": credentials.notificationToken,
      "fullName": credentials.fullName,
      "userImage": credentials.userImage
    };
    return this.http.post(this.signupUrl, body, { headers: headers }).map((res) => { return res.json() }).toPromise();
  }
  forgotPassword(email) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.forgotPasswordUrl, email, { headers: headers }).map((res) => { return res.json() }).toPromise();

  }
}
