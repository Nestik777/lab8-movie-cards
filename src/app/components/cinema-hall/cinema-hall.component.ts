import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-cinema-hall',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cinema-hall.component.html',
  styleUrls: ['./cinema-hall.component.scss']
})
export class CinemaHallComponent implements OnInit {
  @Input() movieId!: string;
  @Output() bookingRequested = new EventEmitter<number[]>();

  rows = 5;
  cols = 8;
  seats = Array(this.rows * this.cols).fill(0);

  selectedSeats: number[] = [];
  bookedSeats: number[] = [];

  constructor(private bookingService: BookingService) {}

  ngOnInit() {
    this.bookedSeats = this.bookingService.getBookings(this.movieId);
  }
  refreshBookedSeats(): void {
    this.bookedSeats = this.bookingService.getBookings(this.movieId);
  }
  isBooked(i: number) { return this.bookedSeats.includes(i); }

  isSelected(i: number): boolean {
    return this.selectedSeats.includes(i);
  }

  toggleSeat(i: number) {
    if (this.isBooked(i)) return;
    if (this.isSelected(i)) {
      this.selectedSeats = this.selectedSeats.filter(s => s !== i);
    } else {
      this.selectedSeats.push(i);
    }
  }

  openForm() {
    this.bookingRequested.emit(this.selectedSeats);
  }

  
}
