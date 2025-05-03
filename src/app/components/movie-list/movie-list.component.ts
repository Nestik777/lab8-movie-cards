import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from '../movie-card/movie-card.component'; 

@Component({
  standalone: true,
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
  imports: [CommonModule, MovieCardComponent] 
})
export class MovieListComponent {
  @Input() movies: any[] = [];
  filteredMovies: any[] = [];

  ngOnInit() {
    this.filteredMovies = this.movies;
  }

  search(query: string) {
    this.filteredMovies = this.movies.filter(movie =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );
  }
}
