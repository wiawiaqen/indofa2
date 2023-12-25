import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap, map, Observable, retry, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private _http: HttpClient) { }
  getOrders(): Observable<{ [key: string]: [] }> {
    return this._http.get<any>('/api/orders/', { withCredentials: true })
  }

  getOrder(id: string): Observable<{ [key: string]: [] }> {
    return this._http.get<any>('/api/orders/one/' + id, { withCredentials: true })
  }

  createOrder(order: any) {
    return this._http.post('/api/orders/one', order, { withCredentials: true })
  }

  updateOrder(id: string, order: any) {
    return this._http.put('/api/orders/' + id, order, { withCredentials: true })
  }

  deleteOrder(id: string) {
    return this._http.delete('/api/orders/' + id, { withCredentials: true })
  }
}
