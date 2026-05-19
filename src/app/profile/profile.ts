import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './profile.html',
  styleUrls: ['./profile.css']
})
export class Profile {
  email = 'any@email.com';
  password = 'anything';
  errorMessage = '';

  constructor(private router: Router) {}

  onSubmit() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    
    // Simple validation - accept anything non-empty
    if (this.email && this.email.length > 0 && this.password && this.password.length > 0) {
      // Store in localStorage directly
      localStorage.setItem('authToken', 'simple-token');
      localStorage.setItem('userEmail', this.email);
      console.log('Login successful, redirecting...');
      this.router.navigate(['/home']);
    } else {
      this.errorMessage = 'Please enter both email and password';
      console.log('Login failed');
    }
  }
}