import { Component, OnInit } from '@angular/core';
import { BookService } from 'app/services/book.service';
import { FilterBooksPipe } from 'app/pipes/filter-books.pipe';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {

  books = [];
  filterText = '';

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe(
      res => {
        this.books = res['page'].map(book => { return { image: book.image_url, author: book.author, title: book.title } });
      },
      error => console.error(error.message)
    );
  }
}
