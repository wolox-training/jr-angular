import { Injectable } from '@angular/core';
import { CanActivateChild, Router } from '@angular/router';
import { UserService } from 'app/services/user.service';
import * as Constants from 'app/utils/constants';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateChild {

  routerLinks = Constants.routerLinks;

  constructor(private router: Router, private userService: UserService) { }

  canActivateChild() {
    if (this.userService.isLogged()) return true;

    this.router.navigate([this.routerLinks.login]);
    return false;
  }
}
