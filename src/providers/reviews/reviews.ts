import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http, Response, RequestOptions, Headers, URLSearchParams } from '@angular/http';
import { NativeStorage } from '@ionic-native/native-storage';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
/*
  Generated class for the ReviewsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ReviewsProvider {
  rankingUrl: string = 'https://reviewpointsgp.herokuapp.com/api/reviews/ranking';
  detectLanguageUrl: string = 'https://api.repustate.com/v4/844812bf08eaaed2d09cb8fa5185231c71653a87/detect-language.json'
  arabicUrl: string = 'https://api.repustate.com/v4/844812bf08eaaed2d09cb8fa5185231c71653a87/score.json'
  englishUrl: string = 'http://text-processing.com/api/sentiment/'
  reviewUrl: string = 'https://reviewpointsgp.herokuapp.com/api/reviews/'
  searchUrl: string = "https://reviewpointsgp.herokuapp.com/api/reviews/search"
  siteUrl:string = 'https://reviewpointsgp.herokuapp.com/api/sites/'
  categoryUrl:string = 'https://reviewpointsgp.herokuapp.com/api/categories/get_categories'
  constructor(public http: Http) {
    console.log('Hello ReviewsProvider Provider');
  }
  GetSites(){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.siteUrl,{headers:headers}).map((res) => { return res.json() }).toPromise();
  }

  GetCategories(siteID){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let body: any = { "siteID": siteID
     };
     return this.http.post(this.categoryUrl,body,{headers:headers}).map((res) => { return res.json() }).toPromise();
  }

  Ranking(token: string) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + token);
    return this.http.get(this.rankingUrl, { headers: headers }).map((res) => { return res.json() }).toPromise();
  }
  DetectLanguage(text) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let body = "text=" + text
    return this.http.post(this.detectLanguageUrl, body, { headers: headers }).map((res) => { return res.json() }).toPromise();
  }
  GetSentiment(text, lang) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    if (lang == 'ar') {
      let body = "text=" + text + "&lang=" + 'ar'
      return this.http.post(this.arabicUrl, body, { headers: headers }).map((res) => { return res.json() }).toPromise();
    } else if (lang == 'en') {
      let body = "text=" + text
      return this.http.post(this.englishUrl, body, { headers: headers }).map((res) => { return res.json() }).toPromise();
    }
  }
  AddReview(review, token) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + token);
    let body: any = {
      "invoiceID": review.invoiceID,
      "productName": review.productName,
      "category": review.category,
      "productModel": review.productModel,
      "review": review.review,
      "site": review.site,
      "user": review.user,
      "sentiment": review.sentiment
    };
    return this.http.post(this.reviewUrl, body, { headers: headers }).map((res) => { return res.json() }).toPromise();

  }

  getAllReviews() {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.reviewUrl, { headers: headers }).map((res) => { return res.json() }).toPromise();
  }
  search(token , searchData){
    var headers = new Headers();    
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + token);
    return this.http.post(this.searchUrl,searchData, { headers: headers }).map((res) => { return res.json() }).toPromise();
    
  }
}
