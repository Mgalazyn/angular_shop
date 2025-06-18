import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems = new BehaviorSubject<any[]>([]);
  cartItems$ = this.cartItems.asObservable();

  addToCart(item: any) {
    const currentItems = this.cartItems.value;
    const existingIndex = currentItems.findIndex(cartItem => cartItem.id === item.id);
    if (existingIndex !== -1) {
      const updatedItems = [...currentItems];
      updatedItems[existingIndex].quantity += 1;
      this.cartItems.next(updatedItems);
    } else {
      this.cartItems.next([...currentItems, { ...item, quantity: 1 }]);
  }
  }

  removeFromCart(index: number) {
    const currentItems = this.cartItems.value;
    currentItems.splice(index, 1);
    this.cartItems.next([...currentItems]);
  }

  clearCart() {
    this.cartItems.next([]);
  }

  getCartItems(): any[] {
    return this.cartItems.value;
  }

  getTotalPrice(): number {
    return this.cartItems.value.reduce((sum, item) => sum + Number(item.price) * item.quantity, 0);
  }
}
