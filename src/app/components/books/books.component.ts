import { Component, OnInit } from '@angular/core';
import { BooksService } from './../../services/books.service';
import { PagerService } from './../../services/pager.service';
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
  // pager: any = {};
  // pagedItems: any[];

  page: any;
  totalPages: any;

  constructor(private booksService : BooksService, private router: Router, private pagerService: PagerService) {
  }

  ngOnInit() {
  }

  searchBookByKey(page) {
    this.key = this.keyInput;
    console.log(this.key)
    this.searchBook(page);
  }

  searchBook(page) {
    console.log(page)
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
        console.log(this.page)
        console.log(this.totalPages)
        // console.log(data);
      }
      console.log(this.books)
      // this.keyInput = '';
    })
  }

  moreInfo(bookIndex) {
    this.bookIndex = bookIndex;
    this.router.navigate(['bookInfo']);
  }

  // searchUserByUsername(username) {
  //   this.usernameInput = username;
  //   console.log(this.usernameInput);
  //   this.booksService.getUser(this.usernameInput)
  //   .then((data) => {
  //     if(data === 404) {
  //       console.log('User not found');
  //       this.user = {}
  //       this.router.navigate(['404']);
  //       this.show = false;
  //       console.log(this.show);
  //     }else {
  //       this.user = data;
  //       console.log(this.show);
  //     }
  //     this.usernameInput = '';
  //   })
  // }

  // searchUser() {
  //   console.log(this.usernameInput);
  //   this.booksService.getUser(this.usernameInput)
  //   .then((data) => {
  //     if(data === 404) {
  //       console.log('User not found');
  //       this.user = {}
  //       this.router.navigate(['404']);
  //     }else {
  //       this.user = data;
  //     }
  //     this.usernameInput = '';
  //   })
  //   console.log(this.show)
  // }


  // setPage(page: number) {
  //   if (page < 1 || page > this.pager.totalPages) {
  //     return;
  //   }
  //
  //   // get pager object from service
  //   this.pager = this.pagerService.getPager(this.books.length, page);
  //
  //   // get current page of items
  //   this.pagedItems = this.books.slice(this.pager.startIndex, this.pager.endIndex + 1);
  // }





}
