import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';

import { AuthProvider } from '../../providers/auth/auth';

import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email: string;
  password: string;
  constructor(private nativeStorage: NativeStorage, public navCtrl: NavController, public navParams: NavParams, private authProvider: AuthProvider, private alertCtrl: AlertController) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    var cerdentials = {
      email: this.email,
      password: this.password
    }
    this.authProvider.login(cerdentials).then((res) => {
      console.log("login response", res);
      this.nativeStorage.setItem("token", { jwtUserToken: res.token }).then((saved) => this.navCtrl.push(TabsPage),
        error => console.error('Error storing item', error)
      );
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

  register() {
    this.navCtrl.push('EditProfilePage');
  }

}
