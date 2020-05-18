import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private booksAdded = new BehaviorSubject([]);
  shoppingCart = this.booksAdded.asObservable();

  constructor() { }

  addBook(book) {
    this.booksAdded.next(book);
  }
}
