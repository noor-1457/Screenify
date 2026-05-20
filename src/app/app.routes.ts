import { Routes } from '@angular/router';
import { AuthGuard } from './auth-guard-guard';
import { Home } from './home/home';
import { Login } from './Login/login';
import { Movies } from './movies/movies';
import { Signup } from './signup/signup';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },  // Only one redirect
  { path: 'login', component: Login },
  { path: 'signup', component: Signup },
  { path: 'home', component: Home, canActivate: [AuthGuard] },
  { path: 'movies', component: Movies, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/login' }
];
