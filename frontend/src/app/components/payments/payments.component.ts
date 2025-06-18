import { Component, ViewChild } from '@angular/core';
import { ElementRef, OnInit} from '@angular/core';
import { PaymentService } from '../../services/payment.service';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {

  // Define the properties for the payment component
  amount = 0;
  currency = 'PLN';
  paymentStatus: string | null = null;

  @ViewChild('paymentRef', { static: true }) paymentRef!: ElementRef;

  constructor(private cart: CartService, private payment: PaymentService) {}

    ngOnInit() {
    this.amount = this.cart.getTotalPrice(); // Get total price from the cart
    // Check if redirected back from PayPal with orderID
  }

  startPayment() {
    this.payment.createOrder(this.amount).subscribe(res => {
    this.amount = this.cart.getTotalPrice();
    console.log('klikniety button');
    window.paypal.Buttons({
      style: {
        layout: 'horizontal',
        color: 'blue',
        shape: 'rect',
        label: 'paypal',
      }, 
      createOrder: (data: any, actions: any) => {
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: this.amount.toString(),
              currency_code: this.currency,
            },
          }],
        });
      },
      onApprove: (data: any, actions: any) => {
        return actions.order.capture().then((details: any) => {
          console.log('Transaction completed by ' + details.payer.name.given_name);
          alert('Transaction completed by ' + details.payer.name.given_name);
          this.cart.clearCart(); // Clear the cart after successful payment
        });
      },
      onError: (err: any) => {
        console.error('Error during the transaction', err);
        alert('An error occurred during the transaction. Please try again later.');
      },
    }
    ).render(this.paymentRef.nativeElement);
      }
    );
  }
  capturePayment(orderID: string) {
    this.payment.captureOrder(orderID).subscribe({
      next: (res) => {
        this.paymentStatus = 'Płatność zakończona sukcesem!';
      },
      error: (err) => {
        this.paymentStatus = 'Błąd płatności!';
      }
    });
  }
}
