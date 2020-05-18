import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from 'app/services/shopping-cart.service';
import { Book } from 'app/models/book';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit{

  @Input() book: Book;
  readonly defaultImageSrc = 'assets/book-cover.png';
  booksShoppingCart: Book[];

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.shoppingCartService.shoppingCart.subscribe(books => this.booksShoppingCart = books);
  }

  addBookToCart() {
    event.stopPropagation();
    this.shoppingCartService.addBook(this.booksShoppingCart.concat(this.book));
  }
}
