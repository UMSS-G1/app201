import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterPage } from './register';
import { RockbandModule } from '../../components/rockband/rockband.module';

@NgModule({
  declarations: [
    RegisterPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterPage),
    RockbandModule
  ],
  exports: [
    RegisterPage
  ]
})
export class RegisterModule {}
