import { Component } from '@angular/core';
import {NavController, NavParams,LoadingController } from 'ionic-angular';
import { ReviewsProvider } from '../../providers/reviews/reviews'
import { NativeStorage } from '@ionic-native/native-storage';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';

@Component({
  selector: 'page-ranking',
  templateUrl: 'ranking.html',
})
export class RankingPage {
  siteArray=[]
  loading = null;
  constructor(private nativeStorage: NativeStorage, public navCtrl: NavController, private reviewProvider: ReviewsProvider, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RankingPage');
    this.showLoading();
    var subscription = Observable.fromPromise(this.nativeStorage.getItem('token'));
    subscription.subscribe(token => {

      console.log("token from observable", token.jwtUserToken);
      this.reviewProvider.Ranking(token.jwtUserToken).then(res => {
       this.siteArray=res;
       console.log("Response : ",this.siteArray)
       this.dismissLoading();
      }).catch(err => {
        console.log("error getting data", err);
      });
    },
      error => {
        console.log("no token", error);
      });
  }

  showLoading() {
    if (!this.loading) {
      this.loading = this.loadingCtrl.create({
        spinner: 'dots',
        content: 'Loading...'
      });
      this.loading.present();
    }
  }
  dismissLoading() {
    if (this.loading) {
      this.loading.dismiss();
      this.loading = null;
    }
  }

}
