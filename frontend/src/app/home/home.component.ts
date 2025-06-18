import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product, Products } from 'src/types';
import { PaginatorModule } from 'primeng/paginator';
import { CartService } from '../services/cart.service';
import { ProductComponent } from '../components/product/product.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent {
  constructor(private productsService: ProductsService, private cartService: CartService) {}

  products: Product[] = [];
  cart: Product[] = [];

  totalRecords: number = 0;
  rows: number = 18;

  onProductOutput(product: Product) {
    console.log(product);
  }

  onProductAddToCart(product: Product) {
    this.cartService.addToCart(product);
    console.log('Product added to cart:', product);
  }

  onPageChange(event: any) {
    this.fetchProducts(event.page, event.rows);
  }

  fetchProducts(page: number, perPage: number) {
    this.productsService
      .getProducts('http://localhost:3000/clothes', { page, perPage })
      .subscribe({
        next: (data: Products) => {
          this.products = data.items;
          this.totalRecords = data.total;
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  editProduct(product: Product, id: number) {
    this.productsService
      .editProduct(`http://localhost:3000/clothes/${id}`, product)
      .subscribe({
        next: (data) => {
          console.log(data);
          this.fetchProducts(0, this.rows);
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  deleteProduct(id: number) {
    this.productsService
      .deleteProduct(`http://localhost:3000/clothes/${id}`)
      .subscribe({
        next: (data) => {
          console.log(data);
          this.fetchProducts(0, this.rows);
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  addProduct(product: Product, id: number) {
    this.productsService
      .addProduct(`http://localhost:3000/clothes/${id}`, product)
      .subscribe({
        next: (data) => {
          console.log(data);
          this.fetchProducts(0, this.rows);
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }

  ngOnInit() {
    this.fetchProducts(0, this.rows);
  }
}
