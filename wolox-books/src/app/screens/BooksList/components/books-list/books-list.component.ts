import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {

  books = [];

  constructor() {
    for (var i = 0; i < 8; i++) {
      this.books.push(
        { image: 'assets/book-cover.png', author: 'Título del libro', title: 'Autor del libro' }
      );
    }
  }

  ngOnInit(): void {
  }
}
