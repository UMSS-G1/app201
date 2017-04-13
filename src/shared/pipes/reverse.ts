import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'reverse',
})
export class ReversePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {
    return value.split('').reverse().join('');
  }
}
