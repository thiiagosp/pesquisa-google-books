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
    // console.log(this.route.queryParams)
    // console.log(this.route.queryParams.subscribe())
    // console.log(this.route.queryParams.subscribe(params => {
    //   params['book']
    // }))
    this.route.queryParams.subscribe(params => {
        this.bookIndex = params['bookIndex'] || -1;
      });
      console.log(this.bookIndex)


    if(this.bookIndex) this.book = this.booksService.books[this.bookIndex];
    // console.log(this.booksService.books[this.bookIndex])
    console.log(this.book)
  }



  favoriteBook(book) {
    var favoritesBooks: any = localStorage.getItem('favoritesBooks')? JSON.parse(localStorage.getItem('favoritesBooks')) : [];
    favoritesBooks.push(JSON.stringify(book));
    localStorage.setItem('favoritesBooks', JSON.parse(favoritesBooks));

  }

}
