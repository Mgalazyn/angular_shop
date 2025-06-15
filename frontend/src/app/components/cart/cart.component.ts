import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
// This component displays the items in the shopping cart and allows users to remove items from it.

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cartItems$ = this.cartService.cartItems$;

  constructor(private cartService: CartService) {}

  removeItem(index: number) {
    this.cartService.removeFromCart(index);
  }
}