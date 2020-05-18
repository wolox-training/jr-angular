import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly API_URLS = {
    register: `${environment.booksApiUrl}/users`,
    login: `${environment.booksApiUrl}/users/sign_in`
  };

  constructor(private http: HttpClient) { }

  createUser(userData) {
    return this.http.post(this.API_URLS.register, userData);
  }

  loginUser(userData) {
    return this.http.post(this.API_URLS.login, userData, { observe: 'response' });
  }

  isLogged() {
    const headers = ["accessToken", "client", "uid"];
    const clientHeaders = Object.keys(localStorage).sort();
    return JSON.stringify(clientHeaders) === JSON.stringify(headers) && Object.values(localStorage).every(val => !!val);
  }
}
