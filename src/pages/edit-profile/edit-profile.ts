import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ProfileProvider } from '../../providers/profile/profile'
import { AuthProvider } from '../../providers/auth/auth';
import { NativeStorage } from '@ionic-native/native-storage';

import { TabsPage } from '../tabs/tabs';
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
  userData;
  email;
  password;
  confirmPassword;
  name;
  myDate;
  userImage = null;
  constructor(private nativeStorage: NativeStorage, public navCtrl: NavController, public navParams: NavParams, private authProvider: AuthProvider, private alertCtrl: AlertController) {
    this.userData = this.navParams.data;
    console.log("user data to edit", this.userData);
    if (this.userData == null) {
      console.log("RegisterPage", this.userData)
      this.profileData = false;
    }
    else {
      console.log("EditProfilePage", this.userData)
      this.profileData = true
    }
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

  signup() {
    var emailForm = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log(this.email)
    console.log(this.name)
    console.log(this.password)
    console.log(this.confirmPassword)
    console.log(this.myDate)

    if (this.password == this.confirmPassword && emailForm.test(this.email) && (this.email && this.password && this.confirmPassword && this.myDate && this.name) != undefined) {
      console.log("valid")
      var cerdentials = {
        email: this.email,
        password: this.password,
        resetPasswordToken: "undefined",
        resetPasswordExpires: 0,
        points: [],
        notificationToken: " N/A",
        fullName: this.name,
        userImage: this.userImage
      }
      console.log("Card : ", cerdentials);
      this.authProvider.SignUp(cerdentials).then((res) => {
        console.log("Sign Up response", res);
        this.nativeStorage.setItem("token", { jwtUserToken: res.token }).then((saved) => {
          console.log(saved);
          this.navCtrl.push(TabsPage);
        }).catch(err => {
          console.log("save token error", err)
        })
      }).catch(err => {
        console.log("SignUp error ", err);
      });
    } else {
      console.log("Not Valid")
      let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: 'Check All Fields',
        buttons: ['Ok']
      });
      alert.present();
    }
  }
}


