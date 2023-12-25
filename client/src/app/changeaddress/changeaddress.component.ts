// changeaddress.component.ts

import { Component } from '@angular/core';
import { AddressService } from 'src/app/address.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-changeaddress',
  templateUrl: './changeaddress.component.html',
  styleUrls: ['./changeaddress.component.css']
})
export class ChangeaddressComponent {
  selectedAddress: string = '';

  constructor(private addressService: AddressService, private router: Router) {}

  onAddressSelected(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.selectedAddress = target.value;
    console.log('Selected Address:', this.selectedAddress);
    this.addressService.setSelectedAddress(this.selectedAddress);
    // You can perform additional actions here based on the selected value
  }

  goToPaymentPage(): void {
    this.router.navigate(['/payment'], { queryParams: { selectedAddress: this.selectedAddress } });
  }
}
