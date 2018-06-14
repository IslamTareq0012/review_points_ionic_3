import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController } from 'ionic-angular';
import { ProfileProvider } from '../../providers/profile/profile'
import { NativeStorage } from '@ionic-native/native-storage';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';

import { User } from '../../Models/userModel';
import { Review } from '../../Models/reviewModel';
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  tabBarElement: any;
  userData: any;
  reviewsData: Review[];
  imageUrl;
  loading = null;
  totalPoints;
  constructor(private nativeStorage: NativeStorage, public navCtrl: NavController, private profileProvider: ProfileProvider, public loadingCtrl: LoadingController) {
    this.imageUrl = "http://localhost:3000/images/";
    this.userData = {} as User;
    this.reviewsData = [];
    this.totalPoints = 0;
  }
  ionViewWillEnter() {
    this.tabBarElement.style.display = 'none';

  }

  ionViewWillLeave() {
    this.tabBarElement.style.display = 'flex';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
    this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
    console.log("tabs element", this.tabBarElement);
    this.showLoading();
    var subscription = Observable.fromPromise(this.nativeStorage.getItem('token'));
    subscription.subscribe(token => {

      console.log("token from observable", token.jwtUserToken);
      this.profileProvider.getUser(token.jwtUserToken).then(res => {
        var Points = 0;
        for (var i = 0; i < res.points.length; i++) {
          Points = Points + res.points[i].sitePoints;
        }
        this.totalPoints = Points;
        this.userData = res;
        this.profileProvider.getUserReviews(token.jwtUserToken).then(res => {
          this.reviewsData = res;
          this.dismissLoading();
        }).catch(err => {
          console.log("getting user reviews error", err);
        })
      }).catch(err => {
        console.log("error getting user", err);
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
  editProfileNav() {
    this.navCtrl.push('EditProfilePage', this.userData);
  }

}
