import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { NativeStorage } from '@ionic-native/native-storage';

import { TabsPage } from '../pages/tabs/tabs';
import { RankingPage } from '../pages/ranking/ranking';
import { ReviewsPage } from '../pages/reviews/reviews';
import { LoginPage } from '../pages/login/login';
import { LongDatePipe } from '../pipes/long-date/long-date';
import { ShortDatePipe } from '../pipes/short-date/short-date'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';
import { ProfileProvider } from '../providers/profile/profile';
import { ReviewsProvider } from '../providers/reviews/reviews';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    RankingPage,
    ReviewsPage,
    LoginPage,
    ShortDatePipe
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
    LoginPage
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
    ReviewsProvider
  ]
})
export class AppModule { }
