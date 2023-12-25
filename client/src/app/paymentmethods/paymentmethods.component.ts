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

      // Add navigation logic to the payment page
      this.navigateToPaymentPage();
    } else {
      // Display a pop-up warning if no payment option is selected
      this.showErrorMessage = true;
    }
  }

  navigateToPaymentPage(): void {
    // Add your navigation logic here using Angular Router
    // For example, navigate to the '/payment' route
    this.router.navigate(['/payment']);
  }
}
