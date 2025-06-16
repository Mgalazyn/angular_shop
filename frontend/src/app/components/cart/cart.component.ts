import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';
// This component displays the items in the shopping cart and allows users to remove items from it.

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cartItems$ = this.cartService.cartItems$;
  totalPrice: number = 0;
  cartItemCount: number = 0;

  constructor(private cartService: CartService, private router: Router) {
    this.cartItems$.subscribe(items => {
      this.cartItemCount = items.length;
      this.totalPrice = items.reduce((sum, item) => sum + Number(item.price), 0);
    });
  }

  removeItem(index: number) {
    this.cartService.removeFromCart(index);
  }

  clearCart() {
    this.cartService.clearCart();
    this.totalPrice = 0; // Reset total price after clearing the cart
    this.cartItemCount = 0; // Reset cart item count after clearing the cart
  }
}