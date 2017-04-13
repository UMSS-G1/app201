import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { RockbandComponent } from './rockband/rockband';
import { MyHighlightDirective } from './my-highlight/my-highlight';

@NgModule({
  declarations: [
    RockbandComponent,
    MyHighlightDirective
  ],
  imports: [
    IonicModule
  ],
  exports: [
    RockbandComponent,
    MyHighlightDirective
  ]
})
export class SharedModule {}