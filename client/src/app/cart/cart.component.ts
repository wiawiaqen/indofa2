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
  stringPrice: String = "";
  totalPrice: number = 0 ;
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

  getRawNumber(x: String) {
    try {
      return Number(x.replace(",", ''))
    }
    catch (e) {
      return 0
    }
  }

  calculateTotalPrice() {
    this.totalPrice = 0;
    this.cart.products.forEach(product => {
      this.totalPrice += product.quantity * this.getRawNumber(product.price);
      console.log(this.totalPrice)
    });
    this.stringPrice = this.NumberWithCommas(this.totalPrice);
  }
  NumberWithCommas(x: number | string): String {
    try {
      var parts = x.toString().split(",");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return parts.join(".");
    }
    catch (e) {
      return String(x)
    }
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
    });
    this.calculateTotalPrice();
  }
  getCart() {
    this._cartService.getUserCart().subscribe(data => {
      this.cart = new Cart(data['data']);
      this.calculateTotalPrice();
    });
  }
  checkout() {
    this._router.navigate(['../checkout'], { relativeTo: this._route });
  }
  goToPayment(){
    this.closeModal();
    this._router.navigate(['/payment']);
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
