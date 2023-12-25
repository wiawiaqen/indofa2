// address.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  private selectedAddressSubject = new BehaviorSubject<string>('');
  selectedAddress$ = this.selectedAddressSubject.asObservable();

  setSelectedAddress(address: string): void {
    this.selectedAddressSubject.next(address);
  }
}
