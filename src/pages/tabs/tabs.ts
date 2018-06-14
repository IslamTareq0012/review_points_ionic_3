import { Component } from '@angular/core';
import { Platform, NavParams } from 'ionic-angular';

import { RankingPage } from '../ranking/ranking';
import { ReviewsPage } from '../reviews/reviews';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root: any = ReviewsPage;
  tab2Root: any = RankingPage;

  userData: any;
  constructor(private navParams: NavParams) {
  }

  ionViewWillEnter() {

  }

}
