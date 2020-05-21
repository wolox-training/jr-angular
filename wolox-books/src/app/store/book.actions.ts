import { createAction } from '@ngrx/store';
import { Book } from 'app/models/book';

export const addBook = createAction(
  '[Book] AddBook', (book: Book) => book
);

export const removeBook = createAction(
  '[Book] RemoveBook', (index) => ({ index })
);
