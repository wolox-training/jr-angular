import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Book } from 'app/models/book';
import { removeBook } from 'app/store/book.actions';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  booksStore: Observable<Book[]>;
  @Output() closeModal = new EventEmitter();
  books: Book[];

  constructor(private store: Store<Book[]>) {
    this.booksStore = this.store.select((state: Book[]) => state['bookStore']);
  }

  ngOnInit(): void {
    this.booksStore.subscribe(books => this.books = books);
  }

  removeBook(index) {
    this.store.dispatch(removeBook(index));
  }
}
