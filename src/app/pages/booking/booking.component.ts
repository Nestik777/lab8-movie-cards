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
  movieId: string | null = null;
  seats: number[] = Array.from({ length: 40 }, (_, i) => i);
  selectedSeats: number[] = [];
  bookedSeats: number[] = []; 

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.movieId = this.route.snapshot.paramMap.get('id');
  }
  get selectedSeatLabels(): string {
    return this.selectedSeats.map(i => i + 1).join(', ');
  }
  
  toggleSeat(seatIndex: number) {
    if (this.bookedSeats.includes(seatIndex)) return;

    if (this.selectedSeats.includes(seatIndex)) {
      this.selectedSeats = this.selectedSeats.filter(i => i !== seatIndex);
    } else {
      this.selectedSeats.push(seatIndex);
    }
  }
}
