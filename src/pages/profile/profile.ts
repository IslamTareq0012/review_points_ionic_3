import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {

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

  }

  editProfileNav() {
    this.navCtrl.push('EditProfilePage');
  }

}
