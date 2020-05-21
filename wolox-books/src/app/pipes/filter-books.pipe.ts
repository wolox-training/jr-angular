import { Pipe, PipeTransform } from '@angular/core';
import { Book } from 'app/models/book';

@Pipe({
  name: 'filterBooks'
})
export class FilterBooksPipe implements PipeTransform {

  transform(books: any[], filterText: string): Book[] {
    return books.filter(book => book.title.toLowerCase().includes(filterText.toLowerCase()));
  }

}
