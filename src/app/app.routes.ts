import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Profile } from './profile/profile';
import { Movies } from './movies/movies';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  // { path: 'profile', component: Profile },
  { path: 'movies', component: Movies },
];
