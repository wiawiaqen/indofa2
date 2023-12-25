import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError,tap, map, Observable, retry, throwError } from 'rxjs';
import { Product } from '../models';
import { Coupon } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }


  getProducts(): Observable<{ [key: string]: [] }> {
    let fields = "name category active imgbase64_reduce"
    return this.http.get<any>('api/products/'+ "?fields=" + fields)
  }

  handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message));
  }

  getAProduct(productId: string): Observable<any> {
    return this.http.get<any>('api/products/one/' + productId)
  }

  getProductReduce(id: string) {
    const fields = "name price imgbase64_reduce";
    return this.http.get('/api/products/' + id + '?fields=' + fields, { withCredentials: true })
  }

  postProduct(data: { [key: string]: any }) {
  return this.http.post('/api/products', data, { withCredentials: true })
  }

  putProduct(product: Product): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/json;charset=utf-8'
    );

    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };

    return this.http
  .put<any>('/api/products/' + product.productID, JSON.stringify(product), requestOptions)
  .pipe(
    map(res => res as Product),
    retry(3),
    catchError(this.handleError)
  )}
  getProductCate(fashionStyle:string):Observable<any>
  {
    const header=new HttpHeaders().set("Content-Type","text/plain;charset=utf-8")
    const requestOptions:Object={
      headers:header,
      responseType:"text"
    }
    return this.http.get<any>("/fashions-style/"+fashionStyle,requestOptions).pipe(
      map((res) => JSON.parse(res) as Array<Product>),
      retry(3),
      catchError(this.handleError)
    );
  }
  deleteProduct(productId: string): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/json;charset=utf-8'
    );

    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this.http
      .delete<any>('/api/products/' + productId, requestOptions)
      .pipe(
        map((res) => JSON.parse(res) as Array<Product>),
        retry(3),
        catchError(this.handleError)
      );
  }
  getCoupon(code: string): Observable<any> {
    return this.http.get<any>('/api/coupons/' + code).pipe(
      map((res) => res as Coupon),
      retry(3),
      catchError(this.handleError)
    );
  }

}
