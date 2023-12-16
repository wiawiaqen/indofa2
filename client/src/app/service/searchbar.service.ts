import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders } from '@angular/common/http';
import { Product } from '../models';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SearchbarService {
  
  constructor(private http:HttpClient) { }
  searchProducts(query:string){
    return this.http.post<{payload:Product[]}>("http://localhost:5000/api/search/getProducts", {payload: query},{
      headers:new HttpHeaders({'Content-Type': 'application/json'})
    }).pipe(
      map(data => data.payload)
    )
  }
  
}
