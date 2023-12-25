import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { Cart, Coupon } from '../models';
import { ModalService } from '../services/modal.service';
import { PaymentmethodsComponent } from '../paymentmethods/paymentmethods.component';
@Component({
  selector: 'app-paymentproducts',
  templateUrl: './paymentproducts.component.html',
  styleUrls: ['./paymentproducts.component.css']
})
export class PaymentproductsComponent {
  isModalOpen: boolean = false;
  componentToLoad: any = null;
  couponCode: string = '';
  coupon: Coupon = new Coupon();
  Date: string;
  cart: Cart = new Cart();
  totalPrice: string = '0';
  finalPrice: string = '0';
  chosenAddress: String;
  chosenCoupon: String;
  totalDiscount: number = 0;
  shippingFee: number = 10000;
  constructor(
    private router: Router,
    private cartService: CartService,
    private modalService: ModalService) {
    this.cartService.chooseAddress.subscribe((address: String) => {
      this.chosenAddress = address;
    });
    this.cartService.chooseCoupon.subscribe((coupon: String) => {
      this.chosenCoupon = coupon;
      this.cartService.getCoupons().subscribe(data => {
        data['data'].forEach((element: { [key: string]: any }) => {
          if (element['_id'] === coupon) {
            this.coupon = new Coupon(element);
            this.applyCouponDiscount(this.coupon);
          }
        });
      });
    }
    );
  }

  createOrder() {
    let orderProducts = this.cart.products.map((product: any) => {
      return {
        productID: product.productID,
        quantity: product.quantity
      }
    });
    let data = {
      user: this.cart.userID,
      address: this.chosenAddress,
      coupon: this.chosenCoupon,
      products: orderProducts,
      total: this.getRawNumber(this.finalPrice)
    }
    this.cartService.createOrder(data).subscribe(data => {
      this.router.navigate(['/successorder']);
    });
  }

  ngOnInit() {
    this.getCart();
    this.calculateSevenDays();
  }
  CheckCoupon(code: string) {
    this.cartService.getCoupons().subscribe(data => {
      data['data'].forEach((element: { [key: string]: any }) => {
        if (element['code'] === code) {
          let coupon = new Coupon(element);
          this.applyCouponDiscount(coupon);
        }
      });
    });
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
    if (coupon.minOrder > this.getRawNumber(this.totalPrice) || coupon.status === false) {
      this.totalDiscount = 0;
    }
    else if (coupon.type === 'percent') {
      this.totalDiscount = coupon.maxDiscount < this.getRawNumber(this.totalPrice) * coupon.discount / 100 ? coupon.maxDiscount : this.getRawNumber(this.totalPrice) * coupon.discount / 100;
    }
    else {
      this.totalDiscount = coupon.discount;
    }
    this.finalPrice = String(this.NumberWithCommas((this.getRawNumber(this.totalPrice) - this.totalDiscount) + this.shippingFee));
  }

  getCart() {
    this.cartService.getUserCart().subscribe(data => {
      this.cart = new Cart(data['data']);
      this.calculateTotalPriceWithCommas();
      this.finalPrice = String(this.NumberWithCommas((this.getRawNumber(this.totalPrice) - this.totalDiscount) + this.shippingFee));
    });
  }
  placeOrder() {
    this.router.navigate(['/successorder']);
  }
}
