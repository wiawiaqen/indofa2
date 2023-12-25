// payment.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddressService } from '../services/address.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  selectedAddress: string = ''; // Initialize the property

  constructor(private route: ActivatedRoute, private addressService: AddressService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.selectedAddress = params['selectedAddress'] || ''; // Use the default value if params.selectedAddress is undefined
    });
  }
}
