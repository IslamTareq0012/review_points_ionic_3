import { Component } from '@angular/core';
import {NavController, NavParams,LoadingController } from 'ionic-angular';
import { ReviewsProvider } from '../../providers/reviews/reviews'
import { NativeStorage } from '@ionic-native/native-storage';
import { Observable } from 'rxjs/Observable';
import { User } from '../../Models/userModel';
import { Review } from '../../Models/reviewModel';
import { ProfilePage } from '../profile/profile'
import { ProfileProvider } from '../../providers/profile/profile'
import 'rxjs/add/observable/fromPromise';

@Component({
  selector: 'page-ranking',
  templateUrl: 'ranking.html',
})
export class RankingPage {
  ran: any;
  siteArray=[]
  loading = null;
  imageUrl;
  userData: any;  
  reviewsData: Review[];
  constructor(private nativeStorage: NativeStorage, public navCtrl: NavController, private reviewProvider: ReviewsProvider,private profileProvider:ProfileProvider, public loadingCtrl: LoadingController) {
    this.reviewsData=[]
    this.userData = {} as User;    
    this.imageUrl = "https://reviewpointsgp.herokuapp.com/images/" + this.userData.userImage;
    this.ran = 0;
  }

  ionViewWillEnter() {
    this.ran = Math.random();    
    console.log('ionViewDidLoad RankingPage');
    this.showLoading();
    var subscription = Observable.fromPromise(this.nativeStorage.getItem('token'));
    subscription.subscribe(token => {
      console.log("token from observable", token.jwtUserToken);
     
      this.profileProvider.getUser(token.jwtUserToken).then(res => {
        this.userData = res;
        this.imageUrl = "https://reviewpointsgp.herokuapp.com/images/" + this.userData.userImage;
        this.profileProvider.getUserReviews(token.jwtUserToken).then(res => {
          this.reviewsData = res;
          this.dismissLoading();
        }).catch(err => {
          console.log("getting user reviews error", err);
        })
      }).catch(err => {
        console.log("error getting user", err);
      });
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

  openProfile() {
    this.navCtrl.push(ProfilePage);
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
