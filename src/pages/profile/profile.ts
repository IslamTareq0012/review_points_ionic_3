import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfileProvider } from '../../providers/profile/profile'

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
  imageUrl: "http://localhost:3000/images/";
  constructor(public navCtrl: NavController, public navParams: NavParams, private profileProvider: ProfileProvider) {

  }
  ionViewWillEnter() {
    this.tabBarElement.style.display = 'none';
    console.log("user data", this.navParams.data);
    this.userData = this.navParams.data;
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
