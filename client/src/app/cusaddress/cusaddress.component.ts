// cusaddress.component.ts

import { Component } from '@angular/core';
import { AddressService } from '../services/address.service';

@Component({
  selector: 'app-cusaddress',
  templateUrl: './cusaddress.component.html',
  styleUrls: ['./cusaddress.component.css']
})
export class CusaddressComponent {
  selectedAddress: string = '';

  constructor(private addressService: AddressService) {}

  // Call this method whenever the address changes
  updateSelectedAddress(newAddress: string): void {
    this.selectedAddress = newAddress;
    // this.addressService.setSelectedAddress(newAddress);
  }
}
