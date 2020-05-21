import { Component, OnInit } from '@angular/core';
import { BookService } from 'app/services/book.service';
import { FilterBooksPipe } from 'app/pipes/filter-books.pipe';
import { Book } from 'app/models/book';
import { Router } from '@angular/router';
import * as Constants from 'app/utils/constants';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {

  books: Book[] = [];
  filterText = '';
  openedModal = false;
  routerLinks = Constants.routerLinks;

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe(
      res => this.books = res['page'].map(book => book),
      error => console.error(error.message)
    );
  }
}
