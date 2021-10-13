import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/service/products/product';
import { ProductsService } from 'src/app/service/products/products.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Product[] =[];

  constructor(private http: HttpClient,
    private productsService: ProductsService) { }

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }
}
