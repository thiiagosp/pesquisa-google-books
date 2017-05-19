import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const router: Routes = [
  { path: "", redirectTo: "index", pathMatch: "full"},
  { path: "index", component: MainComponent},
  { path: "404", component: NotFoundComponent},
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
