import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Book } from 'app/models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  readonly API_URLS = { booksList: `${environment.booksApiUrl}/books` };

  constructor(private http: HttpClient) { }

  getBooks() {
    return this.http.get(this.API_URLS.booksList);
  }

  getBook(id) {
    return this.http.get<Book>(`${this.API_URLS.booksList}/${id}`);
  }
}
