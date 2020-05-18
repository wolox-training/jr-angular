import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent {

  @Input() imageSrc: string;
  @Input() bookTitle: string;
  @Input() bookAuthor: string;
  readonly defaultImageSrc = 'assets/book-cover.png';

  constructor() { }
}
