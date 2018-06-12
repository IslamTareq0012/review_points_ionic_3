import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfileProvider } from '../../providers/profile/profile'

/**
 * Generated class for the EditProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {
  tabBarElement: any;
  profileData = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, private profileProvider: ProfileProvider) {
  }


  ionViewWillEnter() {
    if (this.profileData) {
      this.tabBarElement.style.display = 'none';
    }
  }

  ionViewWillLeave() {
    if (this.profileData) {
      this.tabBarElement.style.display = 'flex';
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
    if (this.profileData) {
      this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
      console.log("tabs element", this.tabBarElement);
    }

  }


  edit() {

  }

}
