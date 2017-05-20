import { Component, OnInit, Input } from '@angular/core';
import { BooksService } from './../../services/books.service';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.css']
})
export class BookInfoComponent implements OnInit {

  @Input() bookIndex: any;
  book: any = {}

  constructor(private booksService: BooksService) {}

  ngOnInit() {
    document.getElementById('bookInfo').classList.remove('hidden');
    if(this.bookIndex) this.book = this.booksService.books(this.bookIndex);
    console.log(this.booksService.books[this.bookIndex])
    console.log(this.book)
  }

}
