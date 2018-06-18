import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { ProfileProvider } from '../../providers/profile/profile'
import { AuthProvider } from '../../providers/auth/auth';
import { NativeStorage } from '@ionic-native/native-storage';
import { User } from '../../Models/userModel';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import { ImagePicker } from '@ionic-native/image-picker';
import { FCM } from '@ionic-native/fcm';

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
  userData: any;
  email;
  password;
  confirmPassword;
  name;
  myDate;
  userImage = null;
  imageUrl;
  tempImageUrl;
  constructor(public fcm: FCM, private imagePicker: ImagePicker, private toastCtrl: ToastController, private profileProvider: ProfileProvider, private nativeStorage: NativeStorage, public navCtrl: NavController, public navParams: NavParams, private authProvider: AuthProvider, private alertCtrl: AlertController) {
    this.userData = {} as User;
    this.userData = this.navParams.get('userData');
    if (this.userData=== null) {
      console.log("RegisterPage", this.userData)
      this.profileData = false;
    }
    else {
      console.log("EditProfilePage", this.userData)
      this.profileData = true
      this.imageUrl = "http://localhost:3000/images/" + this.userData.userImage;
      this.tempImageUrl = "http://localhost:3000/images/" + this.userData.userImage;
      console.log("user data to edit", this.userData);
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
  showToast() {
    let toast = this.toastCtrl.create({
      message: 'Kindly check your email for further instructions',
      duration: 4000,
      position: 'bottom'
    });
    toast.present();
  }
  resestPassword() {
    var body = {
      email: this.userData.email
    }
    this.authProvider.forgotPassword(body)
      .then(res => {
        this.showToast();
      }).catch(err => {
        console.log("error reset password", err);
      });
  }

  edit() {
    if (this.tempImageUrl == this.imageUrl) {
      console.log("user data to submit for edit", this.userData);
      var subscription = Observable.fromPromise(this.nativeStorage.getItem('token'));
      subscription.subscribe(token => {
        this.profileProvider.editUser(token.jwtUserToken, this.userData)
          .then(res => {
            console.log("edit user response", res);
            this.navCtrl.pop();
          }).catch(err => {
            console.log("edit user error", err);
          });
      }, err => {
        console.log("getting token error", err);
      });
    } else if (this.tempImageUrl != this.userData.userImage) {
      this.userData.userImage = this.tempImageUrl;
    }
  }

  pickImage() {
    let options = {
      quality: 95,
      width: 500,
      height: 500,
      maximumImagesCount: 1,
      outputType: 1
    }
    this.imagePicker.getPictures(options)
      .then((result) => {
        this.imageUrl = "data:image/jpeg;base64," + result[0].toString();
        this.tempImageUrl = result[0].toString();
      },
      (err) => { console.log(err); });
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
      //this.fcm.getToken().then(token => {
      var cerdentials = {
        email: this.email,
        password: this.password,
        resetPasswordToken: "undefined",
        resetPasswordExpires: 0,
        points: [],
        notificationToken: "N/A",
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

      //console.log("user firebase notification token", token);
      //});
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


