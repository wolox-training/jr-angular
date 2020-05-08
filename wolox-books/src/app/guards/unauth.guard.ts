import { Injectable } from '@angular/core';
import { CanActivateChild, Router } from '@angular/router';
import { UserService } from 'app/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class UnauthGuard implements CanActivateChild {

  constructor(private router: Router, private userService: UserService) { }

  canActivateChild() {
    if (!this.userService.isLogged()) return true;

    this.router.navigate(['/auth/books']);
    return false;
  }
}
