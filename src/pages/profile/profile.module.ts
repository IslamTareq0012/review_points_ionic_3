import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfilePage } from './profile';
import { LongDatePipe } from '../../pipes/long-date/long-date';
import { ShortDatePipe } from '../../pipes/short-date/short-date';
@NgModule({
  declarations: [
    ProfilePage,
    LongDatePipe,
    ShortDatePipe
  ],
  imports: [
    IonicPageModule.forChild(ProfilePage),
  ],
})
export class ProfilePageModule { }
