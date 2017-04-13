import { Component, Input } from '@angular/core';


@Component({
  selector: 'ums-rockband',
  templateUrl: 'rockband.html'
})
export class RockbandComponent {

  @Input() rockband: any = {};

  constructor() {
    
  }

}
