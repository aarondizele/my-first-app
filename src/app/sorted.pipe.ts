import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorted'
})
export class SortedPipe implements PipeTransform {

  transform(value: any[], args?: any): any { // ? it means can be or not
    if (args === 'ascendant') {
      return value.sort();
    } else if (args === 'descendant') {
      return value.sort().reverse();
    }
  }

}
