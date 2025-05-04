import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CinemaHallComponent } from '../../components/cinema-hall/cinema-hall.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookingService } from '../../services/booking.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CinemaHallComponent
  ],
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  movieId!: string;
  @ViewChild(CinemaHallComponent) cinemaHall!: CinemaHallComponent;

  form!: FormGroup;
  showForm = false;

  successMessage = '';
  successTitle = '';
  showSuccessMessage = false;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private bookingService: BookingService,
    private toastr: ToastrService
  ) {}

  get selectedSeatLabels(): string {
    const seats = this.cinemaHall?.selectedSeats || [];
    return seats.map(i => i + 1).join(', ');
  }

  ngOnInit() {
    this.movieId = this.route.snapshot.paramMap.get('id')!;
    this.form = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onBookingRequested(seats: number[]) {
    this.showForm = true;
  }

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const userData = this.form.value;
    const seats = this.cinemaHall.selectedSeats;

    this.bookingService.saveBooking(this.movieId, seats, userData);

    this.successTitle = 'Бронювання підтверджено';
    this.successMessage = `Місця ${seats.map(i => i + 1).join(', ')} успішно заброньовані`;
    this.showSuccessMessage = true;
    
    setTimeout(() => {
      this.showSuccessMessage = false;
    }, 4000);

    this.cinemaHall.refreshBookedSeats();
    this.showForm = false;   
    this.cinemaHall.selectedSeats = [];
    this.form.reset();
  }

  closeForm() {
    this.showForm = false;
  }
  
  
}
