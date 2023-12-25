import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { Blog } from '../models';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  getBlogs() {
    return this.http.get<any>("/api/blogs/")
  }
  getBlog(id: string) {
    return this.http.get<any>("/api/blogs/" + id)
  }
  getFilter(type: string){
    return this.http.get<any>("api/blogs/filter?type="+type)
  }
}
