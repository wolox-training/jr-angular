import { Component, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Book } from 'app/models/book';
import { AppState } from 'app/store/app.state';
import * as BookActions from 'app/store/books.actions';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent {

  books: Observable<Book[]>;
  @Output() closeModal = new EventEmitter();

  constructor(private store: Store<AppState>) {
    this.books = store.select('book');
  }

  removeBook(index) {
    this.store.dispatch(new BookActions.RemoveBook(index));
  }
}
