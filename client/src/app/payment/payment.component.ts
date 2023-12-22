import { Component } from '@angular/core';
import { Address } from '../models';
import { User } from '../models';
import { Cart } from '../models';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  address: Address = new Address();
  user: User = new User();
  cart: Cart = new Cart();
}
