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

  loginUrl: string = 'http://localhost:3000/api/auth/login';
  signupUrl: string = 'http://localhost:3000/api/auth/signup';

  constructor(private http: Http) {
    console.log('Hello AuthProvider Provider');
  }

  login(credentials) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let body: any = { "email": credentials.email, "password": credentials.password };
    return this.http.post(this.loginUrl, body, { headers: headers }).map((res) => { return res.json() }).toPromise();
  }

}
