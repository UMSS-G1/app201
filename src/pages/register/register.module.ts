import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterPage } from './register';
import { SharedModule } from '../../components/shared.module';

@NgModule({
  declarations: [
    RegisterPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterPage),
    SharedModule
  ],
  exports: [
    RegisterPage
  ]
})
export class RegisterModule {}
