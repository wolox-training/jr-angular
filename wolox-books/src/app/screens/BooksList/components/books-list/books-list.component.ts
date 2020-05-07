import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {

  books = [1,2,3,4,5,6,7,8].map(
    item => { return { image: 'assets/book-cover.png', author: 'Título del libro', title: 'Autor del libro' } }
  );

  constructor() { }

  ngOnInit(): void {
  }
}
