import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[ums-highlight]' // Attribute selector
})
export class MyHighlightDirective {

  constructor(element: ElementRef) {
    element.nativeElement.style.backgroundColor = 'yellow';
  }

}
