import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product, Products } from 'src/types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor (
    private productsService: ProductsService
  ) {}

  products: Product[] = [];
  
  onProductOutput(product: Product) {
    console.log(product, 'Output');
  }
  
  ngOnInit() {
    this.productsService.getProducts('http://localhost:3000/clothes', {page: 0, perPage: 12}).subscribe((products: Products) => {
      this.products = products.items;
    })
  }
}
