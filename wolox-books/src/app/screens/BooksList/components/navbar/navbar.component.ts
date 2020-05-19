import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Book } from 'app/models/book';
import * as Constants from 'app/utils/constants';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  bookCounter: number;
  @Output() openBooksModal = new EventEmitter();
  booksStore: Observable<Book[]>;
  routerLinks = Constants.routerLinks;

  constructor(private router: Router, private store: Store<Book[]>) {
    this.booksStore = this.store.select((state: Book[]) => state['bookStore']);
  }

  ngOnInit(): void {
    this.booksStore.subscribe(books => this.bookCounter = books.length);
  }

  logout() {
    localStorage.clear();
    this.router.navigate([this.routerLinks.login]);
  }
}
