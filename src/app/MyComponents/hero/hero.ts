import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  slides = [
  { image: 'assets/images/hero-1.jpg', alt: 'Movie 1' },
  { image: 'assets/images/hero-2.jpg', alt: 'Movie 2' },
  { image: 'assets/images/hero-3.jpg', alt: 'Movie 3' },
  { image: 'assets/images/hero-4.jpg', alt: 'Movie 4' }
];
}
