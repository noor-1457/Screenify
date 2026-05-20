import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../auth-service';  // Add import
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',  // Fixed selector
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  email = '';
  password = '';
  errorMessage = '';

  constructor(
    private router: Router,
    private authService: AuthService  // Added AuthService
  ) {}

  onSubmit() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    
    if (this.email && this.email.length > 0 && this.password && this.password.length > 0) {
      const success = this.authService.login(this.email, this.password);  // Use service
      if (success) {
        console.log('Login successful, redirecting...');
        this.router.navigate(['/home']);
      } else {
        this.errorMessage = 'Login failed';
      }
    } else {
      this.errorMessage = 'Please enter both email and password';
      console.log('Login failed');
    }
  }
}