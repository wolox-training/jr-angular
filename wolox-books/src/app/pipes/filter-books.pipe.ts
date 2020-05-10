import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBooks'
})
export class FilterBooksPipe implements PipeTransform {

  transform(books: any[], filterText: string): unknown {
    return books.filter(book => book.title.toLowerCase().includes(filterText.toLowerCase()));
  }

}
