import { createAction } from '@ngrx/store';
import { Book } from 'app/models/book';

export const addBook = createAction(
  '[Book-item Component] Add a book to the shopping cart', (book: Book) => book
);

export const removeBook = createAction(
  '[Shopping-list Component] Remove a book from the shopping cart', (index) => ({ index })
);
