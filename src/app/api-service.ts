import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
 
  getMovies(): Observable<any> {
    const apiKey = 'b628540b2588e9e393d1a877af78b68b';
    const baseUrl = 'https://api.themoviedb.org/3';
    return this.http.get(`${baseUrl}/movie/popular?api_key=${apiKey}`).pipe(
      catchError(error => {
        console.error('API Error:', error);
        return of({ results: [] }); // Return empty array on error
      })
    );
  }
}