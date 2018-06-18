import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import { FCM } from '@ionic-native/fcm';

import { AuthProvider } from '../../providers/auth/auth';
import { ProfileProvider } from '../../providers/profile/profile'

import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email: string;
  password: string;
  constructor(public fcm: FCM, private profileProvider: ProfileProvider, private toastCtrl: ToastController, private nativeStorage: NativeStorage, public navCtrl: NavController, public navParams: NavParams, private authProvider: AuthProvider, private alertCtrl: AlertController) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  showToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 4000,
      position: 'bottom'
    });
    toast.present();
  }

  login() {
    var cerdentials = {
      email: this.email,
      password: this.password
    }
    this.authProvider.login(cerdentials).then((res) => {
      console.log("login response", res);
      // this.fcm.getToken().then(token => {
      // this.profileProvider.updateUserFcmToken(res.token, token)
      //   .then(res => {
      this.nativeStorage.setItem("token", { jwtUserToken: res.token }).then((saved) => this.navCtrl.push(TabsPage),
        error => console.error('Error storing item', error)
      );
      // }).catch(err => {
      //   console.log("update user fcm token error", err);
      // });
      //console.log("user firebase notification token", token);
      //});
    }).catch(err => {
      console.log("login error ", err);
      let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: 'Wrong email or password',
        buttons: ['Ok']
      });
      alert.present();
    });

  }
  resestPassword() {
    let alert = this.alertCtrl.create({
      title: 'Insert your email',
      inputs: [
        {
          name: 'email',
          placeholder: 'Email'
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
          text: 'Send',
          handler: data => {
            var emailForm = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            if (emailForm.test(data.email)) {
              var body = {
                email: data.email
              }
              this.authProvider.forgotPassword(body)
                .then(res => {
                  this.showToast('Kindly check your email for further instructions');
                }).catch(err => {
                  console.log("error reset password", err);
                  this.showToast("Invalid mail");
                });
            } else {
              this.showToast("Invalid mail format");
            }

          }
        }
      ]
    });
    alert.present();

  }
  register() {
    this.navCtrl.push('EditProfilePage', { userData: null });
  }

}
