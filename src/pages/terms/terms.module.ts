import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TermsPage } from './terms';
import { RockbandModule } from '../../components/rockband/rockband.module';

@NgModule({
  declarations: [
    TermsPage,
  ],
  imports: [
    IonicPageModule.forChild(TermsPage),
    RockbandModule
  ],
  exports: [
    TermsPage
  ]
})
export class TermsModule {}
