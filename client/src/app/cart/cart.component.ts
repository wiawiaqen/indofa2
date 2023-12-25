import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { Product, User } from '../models';
import { Cart } from '../models';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  style: string = "none";
  products: [] = [];
  user: User;
  cart: Cart;
  item: { [key: string]: any } = {};
  constructor(
    private _cartService: CartService,
    private _router: Router,
    private _route: ActivatedRoute
    ) { }
  ngOnInit() {
  }
  updateCart() {
  }
  increaseQuantity(productID: string) {
    let product = this.cart.products.find(p => p.productID === productID);
    if (product) {
      product.quantity = product.quantity++;
    }
  }
  decreaseQuantity(productID: string) {
    let product = this.cart.products.find(p => p.productID === productID);
    if (product) {
      product.quantity = product.quantity--;
    }
  }
  checkout() {
    this._router.navigate(['../checkout'], { relativeTo: this._route });
  }
  show() {
    if (this.style == "none") {
      this.style = "block";
    }
    else {
      this.style = "none";
    }
  }
}
