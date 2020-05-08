import { Injectable } from '@angular/core';
import { CanActivateChild, Router } from '@angular/router';
import { UserService } from 'app/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateChild {

  constructor(private router: Router, private userService: UserService) { }

  canActivateChild() {
    if (this.userService.isLogged()) return true;

    this.router.navigate(['/unauth/login']);
    return false;
  }
}
