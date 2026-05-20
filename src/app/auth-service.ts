import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSignal = signal<boolean>(false);
  
  constructor(private router: Router) {
    // Check localStorage on load
    const token = localStorage.getItem('authToken');
    if (token) {
      this.isAuthenticatedSignal.set(true);
    }
  }

  get isAuthenticated() {
    return this.isAuthenticatedSignal();
  }

  login(email: string, password: string): boolean {
    // Simple validation - replace with your actual API call
    if (email && password) {
      const token = 'fake-jwt-token-' + Date.now();
      localStorage.setItem('authToken', token);
      localStorage.setItem('userEmail', email);
      this.isAuthenticatedSignal.set(true);
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userEmail');
    this.isAuthenticatedSignal.set(false);
    this.router.navigate(['/login']);
  }
}