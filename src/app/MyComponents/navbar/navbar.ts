import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../auth-service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
  imports: [RouterModule, RouterLink, NgIf]
})
export class NavbarComponent {
   constructor(public authService: AuthService) {}

  logout() {
    this.authService.logout();
  }
}