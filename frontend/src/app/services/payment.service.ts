import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private apiURL = 'http://localhost:3000/api/payment'; // Base URL for payment API

  constructor(private http: HttpClient) { }

  createOrder(total: number): Observable<any> {
    // Create a new order with the total amount
    return this.http.post(`${this.apiURL}`, { total });
  }

  captureOrder(orderId: string): Observable<any> {
    // Capture the order with the given order ID
    return this.http.post(`${this.apiURL}`, { orderId });
  }
}
