import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NativeStorage } from '@ionic-native/native-storage';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';

import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
import { ProfileProvider } from '../providers/profile/profile';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = LoginPage;

  @ViewChild(Nav) nav: Nav;
  constructor(private nativeStorage: NativeStorage, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private profileProvder: ProfileProvider) {

    var subscription = Observable.fromPromise(nativeStorage.getItem('token'));

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      subscription.subscribe(token => {
       // this.nav.setRoot(TabsPage);
        console.log("token from observable", token.jwtUserToken);
      },
        error => {
          console.log("no token", error);
        });
    });
  }
}
