import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';

import { AuthProvider } from '../../providers/auth/auth';

import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email : string;
  password : string;
  constructor(public navCtrl: NavController, public navParams: NavParams , private authProvider : AuthProvider) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    var cerdentials = {
      email : this.email,
      password : this.password
    }
    this.authProvider.login(cerdentials).then((res)=>{
      console.log("login response" , res);
    }).catch(err=>{

    });
    this.navCtrl.push(TabsPage);
  }

  register() {
    this.navCtrl.push('EditProfilePage');
  }

}
