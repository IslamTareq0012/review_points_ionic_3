import { Component } from '@angular/core';

import {RankingPage} from '../ranking/ranking';
import {ReviewsPage} from '../reviews/reviews';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root : any = ReviewsPage;
  tab2Root : any = RankingPage;

  constructor() {

  }
}
