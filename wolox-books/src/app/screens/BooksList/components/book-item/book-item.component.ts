import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Book } from 'app/models/book';
import { addBook } from 'app/store/book.actions';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent {

  @Input() book: Book;
  readonly defaultImageSrc = 'assets/book-cover.png';

  constructor(private store: Store<Book[]>) { }

  addBookToCart() {
    event.stopPropagation();
    this.store.dispatch(addBook(this.book));
  }
}
