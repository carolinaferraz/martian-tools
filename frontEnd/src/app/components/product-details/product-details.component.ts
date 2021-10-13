import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/service/products/product';
import { ProductsService } from 'src/app/service/products/products.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})


export class ProductDetailsComponent implements OnInit {
  product: any;

  // product: Product | undefined;


  constructor(private route: ActivatedRoute,
    private cartService: CartService,
    private productsService: ProductsService) { }

    addToCart(product: Product) {
      this.cartService.addToCart(product);
      window.alert('your product has been added to the cart!');
    }


  ngOnInit():void {


// get product id from current route
  const routeParams = this.route.snapshot.paramMap;
  const productIdFromRoute = Number(routeParams.get('product_id'));

  // find the product
  this.product = this.product.find((product: { product_id: number; }) => product.product_id === productIdFromRoute);

  }

}
