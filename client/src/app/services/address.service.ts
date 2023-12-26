import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AddressService {
  private apiUrl = 'https://provinces.open-api.vn/api/?depth=3';

  constructor(private _http: HttpClient) { }

  getProvinces(): Observable<any> {
    return this._http.get(this.apiUrl);
  }

  getUserAddress(): Observable<{ [key: string]: [] }>{
    return this._http.get<any>('/api/address/user', { withCredentials: true })
  }

  createAddress(address: any){
    return this._http.post('/api/address/one', address, { withCredentials: true })
  }

  updateAddress(id:string, address: any){
    return this._http.put('/api/address/'+id, address, { withCredentials: true })
  }

  deleteAddress(id:string){
    return this._http.put('/api/address/'+id, { withCredentials: true })
  }
}
