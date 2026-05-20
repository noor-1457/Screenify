import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth-service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(): boolean {
    // Just add parentheses here - CALL the function
    if (this.authService.isAuthenticated) {  // Add ()
      return true;
    }
    
    this.router.navigate(['/login']);
    return false;
  }
}