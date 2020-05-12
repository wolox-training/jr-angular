import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private count = new BehaviorSubject(0);
  bookCounter = this.count.asObservable();

  constructor() { }

  addBook(bookCount) {
    this.count.next(bookCount);
  }
}
