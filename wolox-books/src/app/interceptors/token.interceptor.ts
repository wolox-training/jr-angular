import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from 'app/services/user.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private userService: UserService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.userService.isLogged()) {
      const headers = {
        accessToken: localStorage.getItem('accessToken'),
        client: localStorage.getItem('client'),
        uid: localStorage.getItem('uid')
      }
      request = request.clone({
        setHeaders: {
          'access-token': headers.accessToken,
          'client': headers.client,
          'uid': headers.uid
        }
      });
    }

    return next.handle(request);
  }
}
