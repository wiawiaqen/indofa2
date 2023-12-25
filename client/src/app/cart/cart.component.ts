import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart.service';
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
  constructor(private _cartService: CartService, private _router: Router, private _route: ActivatedRoute) {
    this._cartService.getCart(this.user.userID).subscribe(res => {
      this.products = res.products;
    })
  }
  ngOnInit() {
    this._cartService.getUser().subscribe(res => {
      this.user = res['data'];
      this._cartService.getCart(this.user.userID).subscribe(res => {
        this.cart = res;
      })
      this.getALlItem();
    })
  }
  updateCart() {
    this._cartService.updateCart(this.cart).subscribe(res => {
      this._cartService.getCart(this.user.userID).subscribe(res => {
        this.products = res.products;
      })
    })
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
  getItem(id: string): any {
    this._cartService.getItem(id).subscribe(res => {
      return res['data']['imgbase64_reduce'];
    })
  }
  getALlItem() {
    for (let i = 0; i < this.cart.products.length; i++) {
      let productID = this.cart.products[i]['productID']
      this.item[productID] = this.getItem(productID);
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
