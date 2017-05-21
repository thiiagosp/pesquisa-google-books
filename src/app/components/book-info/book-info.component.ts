import { Component, OnInit } from '@angular/core';
import { BooksService } from './../../services/books.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.css']
})
export class BookInfoComponent implements OnInit {

  bookIndex: any;
  book: any = {}

  constructor(private booksService: BooksService, private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
        this.book = JSON.parse(params['book'])
      });
  }



  favoriteBook(book) {
    document.getElementById('btn-fav').classList.add('hidden')
    var favoritesBooks: any = localStorage.getItem('favoritesBooks') ? JSON.parse(localStorage.getItem('favoritesBooks')) : [];
    favoritesBooks.push(book);
    localStorage.setItem('favoritesBooks', JSON.stringify(favoritesBooks));

  }

}
