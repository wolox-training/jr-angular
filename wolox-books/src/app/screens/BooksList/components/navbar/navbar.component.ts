import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'app/models/book';
import { ShoppingCartService } from 'app/services/shopping-cart.service';
import * as Constants from 'app/utils/constants';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{

  booksShoppingCart: Book[];
  routerLinks = Constants.routerLinks;

  constructor(private router: Router, private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.shoppingCartService.shoppingCart.subscribe(books => this.booksShoppingCart = books);
  }

  logout() {
    localStorage.clear();
    this.router.navigate([this.routerLinks.login]);
  }
}
