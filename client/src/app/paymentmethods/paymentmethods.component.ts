import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paymentmethods',
  templateUrl: './paymentmethods.component.html',
  styleUrls: ['./paymentmethods.component.css']
})
export class PaymentmethodsComponent {
  selectedOption: string | null = null;
  showErrorMessage = false;

  constructor(private router: Router) { }
  selectPaymentOption(option: string): void {
    this.selectedOption = option;
  }

  confirmPayment(): void {
    if (this.selectedOption !== null) {
      // Perform your confirmation logic here
      console.log(`Confirmed payment for option ${this.selectedOption}`);

      localStorage.setItem('paymentOption', this.selectedOption);
      this.navigateToPaymentPage();
    } else {
      this.showErrorMessage = true;
    }
  }

  navigateToPaymentPage(): void {
    this.router.navigate(['/payment']);
  }
}
