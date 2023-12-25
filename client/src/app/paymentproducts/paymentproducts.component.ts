import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { Cart } from '../models';
import { Address } from '../models';
import { Coupon } from '../models';

@Component({
  selector: 'app-paymentproducts',
  templateUrl: './paymentproducts.component.html',
  styleUrls: ['./paymentproducts.component.css']
})
export class PaymentproductsComponent {
  Date: string;
  cart: Cart;
  totalPrice: string = '0';
  finalPrice: string = '0';
  chosenAddress: String;
  chosenCoupon: String;
  totalDiscount: number = 0;
  shippingFee: number = 10000;
  constructor(
    private router: Router,
    private cartService: CartService) {
    this.cartService.chooseAddress.subscribe((address: String) => {
      this.chosenAddress = address;
    });
    this.cartService.chooseCoupon.subscribe((coupon: String) => {
      this.chosenCoupon = coupon;
      this.cartService.getCoupons().subscribe(data => {
        data['data'].forEach((element: { [key: string]: any }) => {
          if (element['_id'] === coupon) {
            let coupon_object = new Coupon(element);
            this.applyCouponDiscount(coupon_object);
          }
        });
      });
    }
    );
  }

  ngOnInit() {
    this.getCart();
    this.calculateSevenDays();
  }

  calculateSevenDays() {
    var expectedDeliveryDate = new Date();
    expectedDeliveryDate.setDate(expectedDeliveryDate.getDate() + 7);
    var day = expectedDeliveryDate.getDate();
    var month = expectedDeliveryDate.getMonth() + 1;
    var year = expectedDeliveryDate.getFullYear();
    this.Date = (day < 10 ? '0' + day : day) + '/' +
      (month < 10 ? '0' + month : month) + '/' +
      year;
  }

  getRawNumber(x: string) {
    try {
      return Number(x.replace(",", ''))
    }
    catch (e) {
      return 0
    }
  }
  NumberWithCommas(x: number | string) {
    try {
      var parts = x.toString().split(",");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return parts.join(".");
    }
    catch (e) {
      return x
    }
  }
  calculateTotalPriceWithCommas() {
    let totalPrice = 0;
    this.cart.products.forEach((product: any) => {
      totalPrice += this.getRawNumber(product.price) * product.quantity;
    });
    this.totalPrice = String(this.NumberWithCommas(totalPrice))
  }
  applyCouponDiscount(coupon: Coupon) {
    if (coupon.minOrder < this.getRawNumber(this.totalPrice)) {
      this.totalDiscount = 0;
      this.finalPrice = String(this.NumberWithCommas(this.getRawNumber(this.totalPrice) + this.shippingFee));
    }
    else if (coupon.type === 'percent') {
      this.totalDiscount = coupon.maxDiscount < this.getRawNumber(this.totalPrice) * coupon.discount / 100 ? coupon.maxDiscount : this.getRawNumber(this.totalPrice) * coupon.discount / 100;
      this.finalPrice = String(this.NumberWithCommas((this.getRawNumber(this.totalPrice) - this.totalDiscount) + this.shippingFee));
    }
    else {
      this.totalDiscount = coupon.discount;
      this.finalPrice = String(this.NumberWithCommas((this.getRawNumber(this.totalPrice) - coupon.discount) + this.shippingFee));
    }
  }

  getCart() {
    this.cartService.getUserCart().subscribe(data => {
      this.cart = new Cart(data['data']);
      this.calculateTotalPriceWithCommas();
    });
  }
  placeOrder() {
    this.router.navigate(['/successorder']);
  }
}
