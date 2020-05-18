import { Component } from '@angular/core';
import { Book } from 'app/models/book'

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent {

  books: Book[] = [];

  constructor() {
    for (let i = 0; i < 8; i++) {
      this.books.push(
        { image: 'assets/book-cover.png', author: 'Título del libro', title: 'Autor del libro' }
      );
    }
  }
}
