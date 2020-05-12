import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly REGISTER_URL = `${environment.booksApiUrl}/users`;

  constructor(private http: HttpClient) { }

  createUser(userData) {
    return this.http.post(this.REGISTER_URL, userData);
  }
}
