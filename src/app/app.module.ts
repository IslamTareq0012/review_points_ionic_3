import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { NativeStorage } from '@ionic-native/native-storage';
import { ImagePicker } from '@ionic-native/image-picker';
import { FCM } from '@ionic-native/fcm';

import { TabsPage } from '../pages/tabs/tabs';
import { RankingPage } from '../pages/ranking/ranking';
import { ReviewsPage } from '../pages/reviews/reviews';
import { ProfilePage } from '../pages/profile/profile'
import { LoginPage } from '../pages/login/login';
import { LongDatePipe } from '../pipes/long-date/long-date';
import { ShortDatePipe } from '../pipes/short-date/short-date'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';
import { ProfileProvider } from '../providers/profile/profile';
import { ReviewsProvider } from '../providers/reviews/reviews';
import { FcmProvider } from '../providers/fcm/fcm';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    RankingPage,
    ReviewsPage,
    LoginPage,
    LongDatePipe,
    ShortDatePipe,
    ProfilePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    RankingPage,
    ReviewsPage,
    LoginPage,
    ProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthProvider,
    NativeStorage,
    ProfileProvider,
    ProfileProvider,
    ReviewsProvider,
    ReviewsProvider,
    ImagePicker,
    FcmProvider,
    FCM
  ]
})
export class AppModule { }
