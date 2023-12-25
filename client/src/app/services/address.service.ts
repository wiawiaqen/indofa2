import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private _http: HttpClient) { }
  getAddress() {
    return this._http.get('https://provinces.open-api.vn/api/?depth=3')
  }
}
