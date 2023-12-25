import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { Cart, Product, User } from './models';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _http: HttpClient) { }
getCart(id: string): Observable<any> {
    const headers = new HttpHeaders().set("Content-Type", "text/plain;charset=utf-8")
    const requestOptions: Object = {
      headers: headers,
      responseType: "text"
    }
    return this._http.get<any>("/api/carts/" + id, requestOptions).pipe(
      map(res => JSON.parse(res) as Cart),
      retry(3),
      catchError(this.handleError))
  }
  updateCart(cart: Cart): Observable<any> {
    const headers = new HttpHeaders().set("Content-Type", "text/plain;charset=utf-8")
    const requestOptions: Object = {
      headers: headers,
      responseType: "text"
    }
    return this._http.put<any>("/api/carts/" + cart.cartID, cart, requestOptions).pipe(
      map(res => JSON.parse(res) as Cart),
      retry(3),
      catchError(this.handleError))
  }

  getItem(id:string): Observable<any> {
    const headers = new HttpHeaders().set("Content-Type", "text/plain;charset=utf-8")
    const requestOptions: Object = {
      headers: headers,
      responseType: "text"
    }
    const fields = "imgbase64_reduce name price"
    return this._http.get<any>("/api/products/" + id + '?fields=' + fields)
  }


  getUser(): Observable<any> {
    const headers = new HttpHeaders().set("Content-Type", "text/plain;charset=utf-8")
    const requestOptions: Object = {
      headers: headers,
      responseType: "text"
    }
    return this._http.get<any>("/api/users/user", requestOptions).pipe(
      map(res => JSON.parse(res) as User),
      retry(3),
      catchError(this.handleError))
  }
  handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message))
  }
}
