import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Book } from 'app/models/book';
import { AppState } from 'app/store/app.state';
import * as BookActions from 'app/store/books.actions';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {

  @Input() book: Book;
  readonly defaultImageSrc = 'assets/book-cover.png';
  bookCounter: number;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  addBookToCart() {
    event.stopPropagation();
    this.store.dispatch(new BookActions.AddBook(this.book));
  }
}
