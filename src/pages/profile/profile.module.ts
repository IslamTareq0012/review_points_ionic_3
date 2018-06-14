import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfilePage } from './profile';
import { LongDatePipe } from '../../pipes/long-date/long-date';

@NgModule({
  declarations: [
    ProfilePage,
    LongDatePipe
  ],
  imports: [
    IonicPageModule.forChild(ProfilePage),
  ],
})
export class ProfilePageModule { }
