import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorites-books',
  templateUrl: './favorites-books.component.html',
  styleUrls: ['./favorites-books.component.css']
})
export class FavoritesBooksComponent implements OnInit {
  books: any = [];

  constructor() { }

  ngOnInit() {
    this.getFavoritesBooks();
  }

  getFavoritesBooks() {
    this.books = JSON.parse(localStorage.getItem('favoritesBooks')) || [];
    console.log(this.books)
  }
}
