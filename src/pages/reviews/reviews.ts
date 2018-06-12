import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-reviews',
  templateUrl: 'reviews.html',
})
export class ReviewsPage {

  userData: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReviewsPage');
    this.userData = this.navParams.data;
    console.log("user data", this.navParams.data);
  }

  ionViewWillEnter() {
    this.userData = this.navParams.data;

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
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Search',
          handler: data => {
            console.log("search options", data);
          }
        }
      ]
    });
    alert.present();
  }

  openProfile() {
    this.navCtrl.push('ProfilePage');
  }

  addReview() {

  }

}
