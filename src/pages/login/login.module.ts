import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { RockbandModule } from '../../components/rockband/rockband.module';

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
    RockbandModule
  ],
  exports: [
    LoginPage
  ]
})
export class LoginModule {}
