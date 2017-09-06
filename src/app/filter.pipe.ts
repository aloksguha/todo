import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './todo';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: Todo[], filter: string): Todo[] {
    if (!filter) {
      return items;
    }
    const regex = new RegExp(filter, 'i');
    return items.filter(item => regex.test(item.title));
  }
}
