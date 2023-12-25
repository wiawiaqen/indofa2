// changeaddress.component.ts

import { Component } from '@angular/core';
import { AddressService } from '../services/address.service';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { Address } from '../models';
@Component({
  selector: 'app-changeaddress',
  templateUrl: './changeaddress.component.html',
  styleUrls: ['./changeaddress.component.css']
})
export class ChangeaddressComponent {
  address: Address[];
  selectedAddress: string = '';

  constructor(private addressService: AddressService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getaddress();
  }

  getaddress() {
    this.addressService.getUserAddress().subscribe(data => {
      this.address = [];
      data['data'].forEach((element: { [key: string]: any }) => {
        let address_object = new Address(element);
        this.address.push(address_object);
      });
    });
    this.sortDefaultAddressFirstIndex();
  }

  sortDefaultAddressFirstIndex() {
    this.address.sort((a, b) => {
      if (a.isDefault === true) {
        return -1;
      } else {
        return 1;
      }
    });
  }

  onAddressSelected(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.selectedAddress = target.value;
  }

  goToPaymentPage(): void {
    localStorage.setItem('chosenAddress', this.selectedAddress);
    this.router.navigate(['/payment']);
  }
}
