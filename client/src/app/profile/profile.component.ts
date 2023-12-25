import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AddressService } from '../services/address.service';
import { OrderService } from '../services/order.service';
import { User } from '../models';
import { Address } from '../models';
import { Order } from '../models';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user: User;
  defaultAddress: Address;
  orders: Order[];
  address: Address[];
  constructor(private authService: AuthService,
    private addressService: AddressService,
    private orderService: OrderService
  ) { }

  ngOnInit() {
    this.getUser();
    this.getDefaulAddress();
    this.getDefaultOrders();
  }

  getUser() {
    this.authService.checkUser().subscribe(data => {
      this.user = new User(data['data']);
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
    });
  }
  getDefaultOrders() {
    this.orderService.getOrders().subscribe(data => {
      this.orders = [];
      data['data'].forEach((element: { [key: string]: any }) => {
        let order = new Order(element);
        this.orders.push(order);
      })
    });
  }
}
