import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BooksService {

  baseUrl: string;
  apiKey = 'AIzaSyAnh6A8UYle3wNsSTztzzTgKKCHj2YGoUY'
  books: any = [];
  constructor(private http: Http) {}

  getBooks (key, qtdItems, page) {
    this.baseUrl = `https://www.googleapis.com/books/v1/volumes?q=search+${key}&maxResults=${qtdItems}&startIndex=${page}`;
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return new Promise((resolve, reject) => {
      this.http.get(this.baseUrl, {headers: headers})
      .subscribe((data) => {
        this.books = data.json().items;
        resolve(data.json());
      }, error => {
        if(error.status == 404 ) {
          resolve(error.status);
        }else {
          console.log('Occoreu um erro ao carregar a pesquisa ', error);
        }
      });
    });
  }

}
