import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from "./app.router";

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';

// import { UserComponent } from './components/user/user.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { BooksComponent } from './components/books/books.component';
import { BookInfoComponent } from './components/book-info/book-info.component';
import { HeaderComponent } from './components/header/header.component';

// import { UsersService } from './services/users.service';
import { PagerService } from './services/pager.service';
import { BooksService } from './services/books.service';
import { FavoritesBooksComponent } from './favorites-books/favorites-books.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    // UserComponent,
    NotFoundComponent,
    BooksComponent,
    BookInfoComponent,
    HeaderComponent,
    FavoritesBooksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [BooksService, PagerService, BooksComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
