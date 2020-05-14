import { Component, OnInit } from '@angular/core';
import { BookService } from 'app/services/book.service';
import { Book } from 'app/models/book';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

  book: Book = {
    id: 0,
    author: 'Autor del libro',
    title: 'Título del libro',
    image_url: 'assets/book-cover.png',
    editor: 'Nombre de la editorial',
    year: 'Año de publicación',
    genre: '(género)',
    current_rent: ''
  };
  readonly bestSellerAuthor = 'Piers Anthony';

  constructor(private bookService: BookService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.bookService.getBook(this.route.snapshot.params.id).subscribe(
      res => this.book = res,
      error => console.error(error.message)
    );
  }
}
