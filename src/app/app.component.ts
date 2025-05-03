// src/app/app.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './components/movie-list/movie-list.component';

import { movies, Movie } from './data/movies';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],   
  imports: [CommonModule, MovieListComponent]
})
export class AppComponent {
  moviesList: Movie[] = movies;
}
