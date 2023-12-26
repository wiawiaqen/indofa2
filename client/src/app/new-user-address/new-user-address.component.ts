import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AddressService } from '../services/address.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../models';
@Component({
  selector: 'app-new-user-address',
  templateUrl: './new-user-address.component.html',
  styleUrl: './new-user-address.component.css'
})
export class NewUserAddressComponent implements OnInit {
  provinces: any[] = [];
  form: FormGroup;
  user: User;

  constructor(
    private provincesService: AddressService,
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.form = this.fb.group({
      province: [null],
      district: [null],
      ward: [null],
      name: [null],
      phone: [null],
      street: [null],
      default: [false]
    });
  }

  ngOnInit() {
    this.getUser();
    this.provincesService.getProvinces().subscribe(data => {
      this.provinces = data;
    });

    this.form.get('province')!.valueChanges.subscribe(value => {
      this.form.get('district')!.setValue(null);
      this.form.get('ward')!.setValue(null);
    });

    this.form.get('district')!.valueChanges.subscribe(value => {
      this.form.get('ward')!.setValue(null);
    });
  }

  getUser(){
    this.authService.checkUser().subscribe(data => {
      this.user = new User(data['data']);
    });
  }

  get districts() {
    const provinceName = this.form.value.province;
    return this.provinces.find(p => p.name === provinceName)?.districts || [];
  }

  get wards() {
    const districtName = this.form.value.district;
    return this.districts.find((d:any) => d.name === districtName)?.wards || [];
  }

  submit() {
    this.getUser();
    console.log(this.user)
    let data = this.form.getRawValue();
    let address_data = {
      name: data.name,
      phone: data.phone,
      street: data.street,
      ward: data.ward,
      district: data.district,
      city: data.province,
      default: data.default,
      user: this.user.userID
    };
    this.provincesService.createAddress(address_data).subscribe(data => {
      console.log(data);
    });
    this.router.navigate(['/payment']);
  }
}
