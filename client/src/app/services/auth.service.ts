import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap, map, Observable, retry, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _http: HttpClient
  ) { }

  checkUser(): Observable<{ [key: string]: [] }> {
    return this._http.get<any>('api/auth/user', { withCredentials: true })
  }
}
