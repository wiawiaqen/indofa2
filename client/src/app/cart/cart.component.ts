import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { Cart } from '../models';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  style: string = "none";
  products: [] = [];
  cart: Cart = new Cart();
  item: { [key: string]: any } = {};
  constructor(
    private _cartService: CartService,
    private _router: Router,
    private _route: ActivatedRoute,
    private modalService: ModalService
  ) { }
  ngOnInit() {
    this.getCart();
  }
  closeModal() {
    this.modalService.close();
  }

  increaseQuantity(productID: string) {
    this.cart.products.forEach(product => {
      if (product.productID === productID) {
        product.quantity = product.quantity + 1;
      }
    });
    this.updateCart();
  }
  decreaseQuantity(productID: string) {
    this.cart.products.forEach(product => {
      if (product.productID === productID) {
        product.quantity = product.quantity > 1 ? product.quantity - 1 : 1;
      }
    });
    this.updateCart();
  }
  updateCart() {
    let extractedProducts = this.cart.products.map(product => {
      return {
        product: product.productID,
        quantity: product.quantity
      };
    });
    let data = {
      products: extractedProducts
    }
    this._cartService.updateCart(this.cart.cartID, data).subscribe(data => {
      console.log(data);
    });
  }
  getCart() {
    this._cartService.getUserCart().subscribe(data => {
      console.log(data['data'])
      this.cart = new Cart(data['data']);
      console.log(this.cart);
    });
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
