import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError,tap, map, Observable, retry, throwError } from 'rxjs';
import { Product } from '../models';
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


  getProduct(id: string) {
    return this.http.get('/api/products/one/' + id, {
      withCredentials: true
    }
    )
  }

  // getProductReduce(id: string) {
  //   const fields = "name price imgbase64_reduce"
  //   return this.http.get('/api/products/' + id + '?fields=' + fields, { withCredentials: true })
  // }
  getMaxPage(category: string) {
    return this.http.get('/api/products/pagination/' + "?category=" + category, {
      withCredentials: true
    }
    )
  }

  getPagination(page: string, category: string, sort: string = "null") {
    return this.http.get('/api/products/pagination/' + page+"?category=" + category + "&asort=" +sort, {
      withCredentials: true
    }
    )
  }
  getProductsByCategory(category: string, currentProductId: string): Observable<any> {
    return this.http.get('/api/products/?category=' + category + '&exclude=' + currentProductId, {
      withCredentials: true
    });
  }

  handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message));
  }

  getAProduct(productId: string): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain;charset=utf-8'
    );

    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this.http.get<any>('/api/products/one/' +productId, requestOptions).pipe(
      map((res) => JSON.parse(res) as Product),
      retry(3),
      catchError(this.handleError)
    );
  }

  postProduct(aProduct: any): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/json;charset=utf-8'
    );

    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this.http
      .post<any>('/api/products/one', JSON.stringify(aProduct), requestOptions)
      .pipe(
        map((res) => JSON.parse(res) as Product),
        retry(3),
        catchError(this.handleError)
      );
  }

  putProduct(Product: any): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/json;charset=utf-8'
    );

    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this.http
      .put<any>('/api/products/one', JSON.stringify(Product), requestOptions)
      .pipe(
        map((res) => JSON.parse(res) as Array<Product>),
        retry(3),
        catchError(this.handleError)
      );
  }
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

}

