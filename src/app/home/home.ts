import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MovieCard } from '../MyComponents/movie-card/movie-card';
import { ApiService } from '../api-service';
import { NgIf } from '@angular/common';
import { Hero } from '../MyComponents/hero/hero';

@Component({
  selector: 'app-home',
  imports: [MovieCard, NgIf, Hero],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  allMovies: any[] = [];
  trendingMovies: any[] = [];
  forYouMovies: any[] = [];
  isLoading: boolean = true;

  constructor(
    private api: ApiService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    console.log('Home component initialized');
    this.loadMovies();
  }

  loadMovies() {
    this.isLoading = true;
    this.api.getMovies().subscribe({
      next: (res: any) => {
        console.log('API response received:', res);
        this.allMovies = res.results || [];
        
        // Categorize movies
        this.categorizeMovies();
        
        this.isLoading = false;
        this.cdr.detectChanges();
        console.log('Movies loaded:', this.allMovies.length);
      },
      error: (err: any) => {
        console.error('API error:', err);
        this.isLoading = false;
        this.cdr.detectChanges();
      }
    });
  }

  categorizeMovies() {
    // Trending: Top rated movies (vote_average >= 7)
    this.trendingMovies = this.allMovies
      .filter(movie => movie.vote_average >= 7)
      .slice(0, 4); // Get first 4 trending movies
    
    // For You: Next best movies or lower rated ones
    // Exclude movies already in trending
    const trendingIds = this.trendingMovies.map(m => m.id);
    this.forYouMovies = this.allMovies
      .filter(movie => !trendingIds.includes(movie.id))
      .slice(0, 4); // Get first 4 for you movies
    
    console.log('Trending movies:', this.trendingMovies.length);
    console.log('For You movies:', this.forYouMovies.length);
  }

  ngOnDestroy() {
    console.log('Home component destroyed');
  }
}