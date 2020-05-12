import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from 'app/services/shopping-cart.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {

  @Input() imageSrc: string;
  @Input() bookTitle: string;
  @Input() bookAuthor: string;
  readonly defaultImageSrc = 'assets/book-cover.png';
  bookCounter: number;

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.shoppingCartService.bookCounter.subscribe(bookCount => this.bookCounter = bookCount);
  }

  addBookToCart() {
    event.stopPropagation();
    this.shoppingCartService.addBook(++this.bookCounter);
  }
}
