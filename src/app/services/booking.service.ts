import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private storageKey = 'bookings';

  saveBooking(movieId: string, seats: number[], userData: {name: string, phone: string, email: string}) {
    const current = this.getBookings(movieId);
    const updated = [...current, ...seats];
    localStorage.setItem(`bookings_${movieId}`, JSON.stringify(updated));
    localStorage.setItem(`booking_user_${movieId}`, JSON.stringify(userData));
  }

  getBookings(movieId: string): number[] {
    const data = localStorage.getItem(`bookings_${movieId}`);
    return data ? JSON.parse(data) : [];
  }

  getUserData(movieId: string) {
    const data = localStorage.getItem(`booking_user_${movieId}`);
    return data ? JSON.parse(data) : null;
  }
}
