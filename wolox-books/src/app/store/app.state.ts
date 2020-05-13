import { Book } from 'app/models/book';

export interface AppState {
  readonly book: Book[];
}
