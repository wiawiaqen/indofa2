// cusaddress.component.ts
import { Router } from '@angular/router';
import { Component, Input } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AddressService } from '../services/address.service';
import { CartService } from '../services/cart.service';
import { User } from '../models';
import { Address } from '../models';
import { Cart } from '../models';

@Component({
  selector: 'app-cusaddress',
  templateUrl: './cusaddress.component.html',
  styleUrls: ['./cusaddress.component.css']
})
export class CusaddressComponent {
  user: User;
  defaultAddress: Address = new Address();
  selectedAddress: string;
  address: Address[] = [];
  cart: Cart;

  constructor(
    private addressService: AddressService,
    private authService: AuthService,
    private cartService: CartService,
    private router: Router
  ) { }

  ngOnInit() {
    this.selectedAddress = localStorage.getItem('chosenAddress') || '';
    this.getUser();
    this.getDefaulAddress();
  }

  getUser() {
    this.authService.checkUser().subscribe(data => {
      try { this.user = new User(data['data']); }
      catch (e) {
        this.router.navigate(['/login']);
      }
    });
  }

  getDefaulAddress() {
    this.addressService.getUserAddress().subscribe(data => {
      this.address = [];
      data['data'].forEach((element: { [key: string]: any }) => {
        let address_object = new Address(element);
        this.address.push(address_object);
        if (element['default'] === true) {
          this.defaultAddress = new Address(element);
        }
      });
      this.address.forEach(address_object => {
        if (address_object.addressID === this.selectedAddress) {
          this.defaultAddress = address_object;
        }
      });
    });
  }

  getCart() {
    this.cartService.getUserCart().subscribe(data => {
      this.cart = new Cart(data['data']);
    });
  }


}
