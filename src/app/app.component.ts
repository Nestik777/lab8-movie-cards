// src/app/app.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './components/movie-list/movie-list.component';

// Ось сюди:
import { movies, Movie } from './data/movies';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],   // або .css, залежно від тебе
  imports: [CommonModule, MovieListComponent]
})
export class AppComponent {
  // Тепер беремо дані з файлу:
  moviesList: Movie[] = movies;
}
