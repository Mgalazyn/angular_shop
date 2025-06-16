import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/types';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product!: Product;
  @Output() productOutput: EventEmitter<Product> = new EventEmitter<Product>();
  
  constructor(private cartService: CartService) {}

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
  
  ngOnInit() {
    this.productOutput.emit(this.product);
  }
}
