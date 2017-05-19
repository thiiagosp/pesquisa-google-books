import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UsersService {

     baseUrl: string;
     constructor(private http: Http) {}

     getUser (username) {
          this.baseUrl = 'https://api.github.com/users/' + username;
          console.log(this.baseUrl)
          let headers = new Headers();
          headers.append('Content-Type', 'application/json');

          return new Promise((resolve, reject) => {
               this.http.get(this.baseUrl, {headers: headers})
               .subscribe((data) => {
                    resolve(data.json());
               }, error => {
                    if(error.status == 404 ) {
                         resolve(error.status);
                    }else {
                         console.log('Occoreu um erro ao carregar os usuários ', error);
                    }
               });
          });
     }

     getRepos (username) {
          this.baseUrl = 'https://api.github.com/users/' + username + '/repos';
          console.log(this.baseUrl)
          let headers = new Headers();
          headers.append('Content-Type', 'application/json');

          return new Promise((resolve, reject) => {
               this.http.get(this.baseUrl, {headers: headers})
               .subscribe((data) => {
                    resolve(data.json());
               }, error => {
                    console.log('Occoreu um erro ao carregar os usuários ', error);
               });
          });
     }


}
