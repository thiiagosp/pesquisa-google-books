import { Component, OnInit } from '@angular/core';
import { UsersService } from './../../services/user.service';
import { PagerService } from './../../services/pager.service';
import { Router } from '@angular/router';

@Component({
     selector: 'app-user',
     templateUrl: './user.component.html',
     styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
     usernameInput: any;
     commentInput: any;
     user: any = {};
     show = false;
     userRepos: any = [];
     comments: any = [];

     pager: any = {};
     pagedItems: any[];

     constructor(private usersService : UsersService, private router: Router, private pagerService: PagerService) { }


     ngOnInit() {

     }

     searchUserByUsername(username) {
          this.usernameInput = username;
          console.log(this.usernameInput);
          this.usersService.getUser(this.usernameInput)
          .then((data) => {
               if(data === 404) {
                    console.log('User not found');
                    this.user = {}
                    this.router.navigate(['404']);
                    this.show = false;
                    console.log(this.show);
               }else {
                    this.user = data;
                    this.getRepositories(this.usernameInput);
                    console.log(this.user);
                    this.show = true;
                    this.getComments();
                    console.log(this.show);
               }
               this.usernameInput = '';
          })
     }

     searchUser() {
          console.log(this.usernameInput);
          this.usersService.getUser(this.usernameInput)
          .then((data) => {
               if(data === 404) {
                    console.log('User not found');
                    this.user = {}
                    this.show = false;
                    this.router.navigate(['404']);
               }else {
                    this.user = data;
                    this.getRepositories(this.usernameInput);
                    console.log(this.user);
                    this.show = true;
                    this.getComments();
               }
               this.usernameInput = '';
          })
          console.log(this.show)
     }

     getRepositories(username) {
          this.usersService.getRepos(username)
          .then((data) => {
               if(data === 404) {
                    console.log('Repository not found');
                    this.userRepos = {}
               }else {
                    this.userRepos = data;
                    this.setPage(1);
                    console.log(this.pager.pages);
               }
          })
     }

     getComments() {
          this.comments = JSON.parse(localStorage.getItem(this.user.login)) || [];
          console.log(this.comments);
     }

     addComment() {
          console.log(this.commentInput);
          console.log(this.comments);
          if(this.commentInput) {

               this.comments.push(this.commentInput);
               console.log(this.comments);
               localStorage.setItem(this.user.login, JSON.stringify(this.comments));
               this.commentInput = '';
          }
     }

     removeComment(comment) {
          console.log(this.comments);
          // let userComments = this.comments;
          let idx = this.comments.indexOf(comment);
          console.log(idx)
          this.comments.splice(idx, 1);
          console.log(this.comments);
          localStorage.setItem(this.user.login, JSON.stringify(this.comments));

     }





     setPage(page: number) {
          if (page < 1 || page > this.pager.totalPages) {
               return;
          }

          // get pager object from service
          this.pager = this.pagerService.getPager(this.userRepos.length, page);

          // get current page of items
          this.pagedItems = this.userRepos.slice(this.pager.startIndex, this.pager.endIndex + 1);
     }





}
