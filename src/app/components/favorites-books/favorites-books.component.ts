import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorites-books',
  templateUrl: './favorites-books.component.html',
  styleUrls: ['./favorites-books.component.css']
})
export class FavoritesBooksComponent implements OnInit {
  books: any = [];
  bookIndex: number;

  constructor(private router: Router) { }

  ngOnInit() {
    this.getFavoritesBooks();
  }

  getFavoritesBooks() {
    this.books = JSON.parse(localStorage.getItem('favoritesBooks')) || [];
    console.log(this.books)
  }

  moreInfo(bookIndex) {
    this.bookIndex = bookIndex;
    this.router.navigate(['bookInfo'], { queryParams: { book: JSON.stringify(this.books[bookIndex]) } });
  }
}
