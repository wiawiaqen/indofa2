import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { Address, Coupon } from '../models';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  public chooseAddress = new EventEmitter();
  public chooseCoupon = new EventEmitter();
  public choosePayment = new EventEmitter();
  constructor(private _http: HttpClient,
    ) { }

  chooseAddressEvent(address: Address) {
    this.chooseAddress.emit(address);
  }

  chooseCouponEvent(coupon: Coupon) {
    this.chooseCoupon.emit(coupon);
  }

  choosePaymentEvent(payment: any) {
    this.choosePayment.emit(payment);
  }

  getCoupons(): Observable<{ [key: string]: [] }> {
    return this._http.get<any>('/api/coupons', { withCredentials: true })
  }

  getUserCart(): Observable<{ [key: string]: [] }>{
    return this._http.get<any>('/api/carts/usercart', { withCredentials: true })
  }

  updateCart(cart: any){
    return this._http.put('/api/carts/usercart', cart, { withCredentials: true })
  }

}
