import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,AlertController } from 'ionic-angular';
import { ProfileProvider } from '../../providers/profile/profile'
import { ReviewsProvider } from '../../providers/reviews/reviews'
import { NativeStorage } from '@ionic-native/native-storage';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';

import { User } from '../../Models/userModel';
import { Review } from '../../Models/reviewModel';
/**
 * Generated class for the AddReviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-review',
  templateUrl: 'add-review.html',
})
export class AddReviewPage {
  invoiceID;
  productName;
  productModel;
  site;
  category;
  review;
  reviewData={};
  sentiment;
  userData = {} as User;
  loading = null;
  userToken;
  userID:number;
  detectText:string;
  constructor(private nativeStorage: NativeStorage, public navCtrl: NavController, private profileProvider: ProfileProvider,private reviewProvider:ReviewsProvider, public loadingCtrl: LoadingController,private alertCtrl:AlertController) {
  }

  ionViewDidLoad() {


    console.log('ionViewDidLoad AddReviewPage');
    this.showLoading();
    var subscription = Observable.fromPromise(this.nativeStorage.getItem('token'));
    subscription.subscribe(token => {

      console.log("token from observable", token.jwtUserToken);
      this.profileProvider.getUser(token.jwtUserToken).then(res => {
        this.userData = res._id;
        this.userID=res._id
        this.userToken=token.jwtUserToken
        console.log("User ID" ,this.userID)
        this.dismissLoading();
      }).catch(err => {
        console.log("error getting user", err);
      });
    },
      error => {
        console.log("no token", error);
      });
  }
  CheckLanguage(){
    this.showLoading()
    this.reviewProvider.DetectLanguage(this.review).then(res => {
      this.detectText = res.language;
      console.log("Language is " ,this.detectText)
      this.reviewProvider.GetSentiment(this.review,this.detectText).then(res => {
        this.showLoading();
         
         if (this.detectText=='en'){
          this.sentiment=res.probability.pos
          console.log("Score is " ,this.sentiment)
         }else if (this.detectText =='ar'){
           this.sentiment = res.score;
          console.log("Score is " ,this.sentiment);
         }else {
          let alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Cannot Define your language please write on Arabic or English',
            buttons: ['Ok']
          });
          alert.present();
         }
         this.reviewData = {
          "invoiceID": this.invoiceID,
          "productName":this.productName,
         "category":this.category,
         "productModel": this.productModel,
         "review": this.review,
         "site" : this.site,
         "user": this.userID,
         "sentiment":this.sentiment
         }
         console.log(this.reviewData);
          this.reviewProvider.AddReview(this.reviewData,this.userToken).then(res => {
            console.log(res)
            let alert = this.alertCtrl.create({
              title: 'Alert',
              subTitle: 'Thanks for your review',
              buttons: [
                {text: 'Ok' ,
	  	          handler: () => {
                  this.navCtrl.pop();
              }}]
            });
            alert.present();
            this.dismissLoading();
          }).catch(err => {
            let alert = this.alertCtrl.create({
              title: 'Error',
              subTitle: 'Sorry please try again Later',
              buttons: ['Ok']
            });
            alert.present();
             console.log("error adding Review ", err);    
          })
       }).catch(err => {
        let alert = this.alertCtrl.create({
          title: 'Error',
          subTitle: 'Cannot Get score of sentiment',
          buttons: ['Ok']
        });
        alert.present();
         console.log("error getting score ", err);
       });
    }).catch(err => {
      let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: 'Cannot Define your language please write on Arabic or English',
        buttons: ['Ok']
      });
      alert.present();
      console.log("error detecting Language", err);
    });
}

  
  AddReview(){
    console.log(this.detectText);
    console.log("ssss0",this.CheckLanguage());
    console.log(this.sentiment);
    console.log(this.invoiceID);
    console.log(this.productModel);
    console.log(this.productName);
    console.log(this.site);
    console.log(this.category);
    console.log(this.review);
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
