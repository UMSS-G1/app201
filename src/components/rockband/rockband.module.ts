import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { RockbandComponent } from './rockband';

@NgModule({
  declarations: [
    RockbandComponent,
  ],
  imports: [
    IonicModule
  ],
  exports: [
    RockbandComponent
  ]
})
export class RockbandModule {}
