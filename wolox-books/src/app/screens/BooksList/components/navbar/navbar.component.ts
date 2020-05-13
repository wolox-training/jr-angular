import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Constants from 'app/utils/constants';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  routerLinks = Constants.routerLinks;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    localStorage.clear();
    this.router.navigate([this.routerLinks.login]);
  }
}
