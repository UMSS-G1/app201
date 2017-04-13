import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { RockbandComponent } from './components/rockband/rockband';
import { MyHighlightDirective } from './directives/my-highlight/my-highlight';
import { ReversePipe } from './pipes/reverse';

@NgModule({
  declarations: [
    RockbandComponent,
    MyHighlightDirective,
    ReversePipe
  ],
  imports: [
    IonicModule
  ],
  exports: [
    RockbandComponent,
    MyHighlightDirective,
    ReversePipe
  ]
})
export class SharedModule {}