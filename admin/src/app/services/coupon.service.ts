import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap, map, Observable, retry, throwError } from 'rxjs';
import { Coupon } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CouponService {

  constructor(
    private http: HttpClient
  ) { }

  getCoupons(): Observable<{ [key: string]: [] }> {
    let fields = "code type status  date_start date_end"
    return this.http.get<any>('api/coupons/')
  }

  handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message));
  }

  postCoupon(aCoupon: any): Observable<any> {
    return this.http
      .post<any>('/api/coupons/one', JSON.stringify(aCoupon))
      .pipe(
        map((res) => JSON.parse(res) as Coupon),
        retry(3),
        catchError(this.handleError)
      );
    }

    deleteCoupon(couponId: string): Observable<any> {
      const headers = new HttpHeaders().set(
        'Content-Type',
        'application/json;charset=utf-8'
      );
  
      const requestOptions: Object = {
        headers: headers,
        responseType: 'text',
      };
      return this.http
        .delete<any>('/api/coupons/' + couponId, requestOptions)
        .pipe(
          map((res) => JSON.parse(res) as Array<Coupon>),
          retry(3),
          catchError(this.handleError)
        );
    }
}
