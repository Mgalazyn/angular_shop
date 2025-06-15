import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems = new BehaviorSubject<any[]>([]);
  cartItems$ = this.cartItems.asObservable();

  addToCart(item: any) {
    const updated = [...this.cartItems.value, item];
    this.cartItems.next(updated);
  }

  removeFromCart(index: number) {
    const updated = [...this.cartItems.value];
    updated.splice(index, 1);
    this.cartItems.next(updated);
  }

  clearCart() {
    this.cartItems.next([]);
  }

  getCartItems(): any[] {
    return this.cartItems.value;
  }

  getTotalPrice(): number {
    return this.cartItems.value.reduce((sum, item) => sum + Number(item.price), 0);
  }
}
