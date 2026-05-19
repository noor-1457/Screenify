import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MovieCard } from '../MyComponents/movie-card/movie-card';
import { ApiService } from '../api-service';

@Component({
  selector: 'app-home',
  imports: [MovieCard], // Remove NgIf from imports
  templateUrl: './movies.html',
  styleUrl: './movies.css',
})
export class Movies implements OnInit {
  movies: any[] = [];
  isLoading: boolean = true;

  constructor(
    private api: ApiService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.loadMovies();
  }

  loadMovies() {
    this.isLoading = true;
    this.api.getMovies().subscribe({
      next: (res: any) => {
        console.log('API response received:', res);
        this.movies = res.results || [];
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: (err: any) => {
        console.error('API error:', err);
        this.isLoading = false;
        this.cdr.detectChanges();
      }
    });
  }

  ngOnDestroy() {
    console.log('Movies component destroyed');
  }
}