import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { AddReviewPage } from '../add-review/add-review';
import { NativeStorage } from '@ionic-native/native-storage';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';

import { User } from '../../Models/userModel';
import { Review } from '../../Models/reviewModel';
import { ProfilePage } from '../profile/profile'
import { ProfileProvider } from '../../providers/profile/profile'
import { ReviewsProvider } from '../../providers/reviews/reviews';
@Component({
  selector: 'page-reviews',
  templateUrl: 'reviews.html',
})
export class ReviewsPage {

  userData: any;
  reviewsData: Review[];
  loading = null;
  imageUrl;
  isSearch = false;
  tempReviews: any;
  constructor(private profileProvider: ProfileProvider, private reviewProvider: ReviewsProvider, private nativeStorage: NativeStorage, public loadingCtrl: LoadingController, public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
    this.userData = {} as User;
    this.reviewsData = [];
    this.imageUrl = "https://reviewpointsgp.herokuapp.com/images/";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReviewsPage');

  }

  ionViewWillEnter() {
    this.showLoading();
    var subscription = Observable.fromPromise(this.nativeStorage.getItem('token'));

    subscription.subscribe(token => {
      console.log("token in reviews page", token.jwtUserToken);
      this.profileProvider.getUser(token.jwtUserToken).then(res => {
        console.log("user", res);
        this.userData = res;
        this.reviewProvider.getAllReviews().then(res => {
          console.log("all reviews", res);
          this.reviewsData = res;
          this.tempReviews = res;
          this.dismissLoading();
        }).catch(err => {
          console.log("getting reviews error", err);
        });
      }).catch(err => {
        console.log("getting user error", err);
      });
    }, err => {
      console.log("getting token error", err);
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

  presentSearchPrompt() {
    let alert = this.alertCtrl.create({
      title: 'Search',
      inputs: [
        {
          name: 'siteName',
          placeholder: 'Site Name'
        },
        {
          name: 'productName',
          placeholder: 'Prodct Name',
        },
        {
          name: 'category',
          placeholder: 'Category',
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Search',
          handler: data => {
            this.showLoading();
            var searchData = {
              site: null,
              category: null,
              productName: null
            }
            console.log("search options", data);
            if (data.productName != "") {
              searchData.productName = data.productName;
            }
            if (data.siteName != "") {
              searchData.site = data.siteName;
            }
            if (data.category != "") {
              searchData.category = data.category;
            }
            var subscription = Observable.fromPromise(this.nativeStorage.getItem('token'));
            subscription.subscribe(token => {
              this.reviewProvider.search(token.jwtUserToken, searchData)
                .then(res => {
                  console.log("search result", res);
                  if (res.length != 0) {
                    this.isSearch = true;
                    this.reviewsData = res;
                    this.dismissLoading();
                  } else if (res.length == 0) {
                    let alert = this.alertCtrl.create({
                      title: 'No Results!',
                      subTitle: 'unfortunately no reviews of thise search data',
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel'
                      }]
                    });
                    alert.present();
                    this.dismissLoading();
                  }
                }).catch(err => {
                  console.log("search error", err);
                })
            }, err => {
              console.log("error getting token", err);
            });

          }
        }
      ]
    });
    alert.present();
  }

  cancelSearch() {
    this.isSearch = false;
    this.reviewsData = this.tempReviews;
  }

  openProfile() {
    this.navCtrl.push(ProfilePage);
  }

  addReview() {
    this.navCtrl.push('AddReviewPage');
  }

}
