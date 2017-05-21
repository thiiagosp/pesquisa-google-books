import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from "./app.router";

import { AppComponent } from './app.component';

import { BooksComponent } from './components/books/books.component';
import { BookInfoComponent } from './components/book-info/book-info.component';
import { FavoritesBooksComponent } from './components/favorites-books/favorites-books.component';

import { BooksService } from './services/books.service';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookInfoComponent,
    FavoritesBooksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [BooksService, BooksComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
