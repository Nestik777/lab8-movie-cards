import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CinemaHallComponent } from '../../components/cinema-hall/cinema-hall.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule, CinemaHallComponent],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss'
})
export class BookingComponent {
  movieId: string = '';

  constructor(private route: ActivatedRoute) {
    this.movieId = this.route.snapshot.params['id'];
  }
}
