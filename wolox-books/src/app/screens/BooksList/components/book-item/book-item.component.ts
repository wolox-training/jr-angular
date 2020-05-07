import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {

  @Input() imageSrc: string;
  @Input() bookTitle: string;
  @Input() bookAuthor: string;

  constructor() { }

  ngOnInit(): void {
  }

}
