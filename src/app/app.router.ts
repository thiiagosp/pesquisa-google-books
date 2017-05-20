import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { BooksComponent } from './components/books/books.component';
import { BookInfoComponent } from './components/book-info/book-info.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const router: Routes = [
  { path: "", redirectTo: "book", pathMatch: "full"},
  { path: "index", component: MainComponent},
  { path: "book", component: BooksComponent},
  { path: "bookInfo", component: BookInfoComponent},
  { path: "404", component: NotFoundComponent},
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
