import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MovieListComponent } from '../../components/movie-list/movie-list.component';
import { Movie, movies } from '../../data/movies';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MovieListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  moviesList: Movie[] = movies;
}
