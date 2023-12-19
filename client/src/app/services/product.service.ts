import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { Product } from '../models';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }

  getProducts() {
    return this.http.get('/api/products/', {
      withCredentials: true
    }
    )
  }

  getProduct(id: string) {
    return this.http.get('/api/products/' + id, {
      withCredentials: true
    }
    )
  }

  getProductReduce(id: string) {
    const fields = "name price imgbase64_reduce"
    return this.http.get('/api/products/' + id + '?fields=' + fields, { withCredentials: true })
  }

  getPagination(page: number) {
    return this.http.get('/api/products/pagination/' + page, {
      withCredentials: true
    }
    )
  }

}
