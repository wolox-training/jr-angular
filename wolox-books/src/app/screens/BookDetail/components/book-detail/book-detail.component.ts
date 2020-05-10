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

  book: Book = new Book({});
  readonly bestSellerAuthor = 'Piers Anthony';

  constructor(private bookService: BookService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.bookService.getBook(this.route.snapshot.params.id).subscribe(
      res => this.book = new Book(res),
      error => console.error(error.message)
    );
  }
}
