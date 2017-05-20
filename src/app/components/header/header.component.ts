import { Component, OnInit } from '@angular/core';
import { BooksComponent} from './../books/books.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private booksComponent: BooksComponent) { }

  ngOnInit() {
  }
  searchBookByKey(page) {
    this.booksComponent.searchBookByKey(page)
  }

}
