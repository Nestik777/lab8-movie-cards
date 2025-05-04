import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cinema-hall',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cinema-hall.component.html',
  styleUrl: './cinema-hall.component.scss'
})
export class CinemaHallComponent {
  rows = 5;
  cols = 8;
  selectedSeats: string[] = [];

  toggleSeat(row: number, col: number) {
    const seat = `${row}-${col}`;
    if (this.selectedSeats.includes(seat)) {
      this.selectedSeats = this.selectedSeats.filter(s => s !== seat);
    } else {
      this.selectedSeats.push(seat);
    }
  }

  isSelected(row: number, col: number): boolean {
    return this.selectedSeats.includes(`${row}-${col}`);
  }
}
