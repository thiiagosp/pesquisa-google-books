import { Component, OnInit } from '@angular/core';
import { BooksService } from './../../services/books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  keyInput: any;
  key: any;
  data: any;
  books: any = [];
  bookIndex: number;

  page: any;
  totalPages: any;

  constructor(private booksService : BooksService, private router: Router) {
  }

  ngOnInit() {
    if(this.booksService.books) this.books = this.booksService.books;
  }

  searchBookByKey(page) {
    this.key = this.keyInput;
    this.searchBook(page);
  }

  searchBook(page) {
    let key = this.key.replace(' ', '%20');
    let qtdItems = 21
    let startIndex = page * qtdItems;
    this.booksService.getBooks(key, qtdItems, startIndex)
    .then((data) => {
      if(data === 404) {
        console.log('User not found');
        this.books = []
        this.router.navigate(['404']);
      }else {
        this.data = data;
        this.books = this.data.items;
        this.totalPages = Math.ceil(this.data.totalItems / 12)
      }
    })
  }

  moreInfo(bookIndex) {
    this.bookIndex = bookIndex;
    this.router.navigate(['bookInfo'], { queryParams: { book: JSON.stringify(this.books[bookIndex]) } });
  }

}
