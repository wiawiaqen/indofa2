import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paymentproducts',
  templateUrl: './paymentproducts.component.html',
  styleUrls: ['./paymentproducts.component.css']
})
export class PaymentproductsComponent {
  constructor(private router: Router) {}

  placeOrder() {
    this.router.navigate(['/successorder']);
  }
}