import { Component, inject } from '@angular/core';
import { Coupon } from '../models';
import { CouponService } from '../services/coupon.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-coupon',
  templateUrl: './new-coupon.component.html',
  styleUrl: './new-coupon.component.css'
})
export class NewCouponComponent {
  myForm: FormGroup;
  
  constructor(private service: CouponService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }

  couponForm: FormGroup
  fb = inject(FormBuilder)

  ngOnInit(): void{
    this.couponForm = this.formBuilder.group({
      code: '',
      describe: '',
      date_start: '',
      date_end: '',
      type: '',
      amount: '',
      discount: '',
      d_max: '',
    });
  }
  submitCoupon() {
    let formData = this.couponForm.getRawValue()
    let data = {
      code: formData.code,
      describe: formData.describe,
      date_start: formData.date_start,
      date_end: formData.date_end,
      type: formData.type,
      amount: formData.amount,
      discount: formData.discount,
      d_max: formData.d_max,
    }
    console.log(formData)
      console.log(formData.name)
      this.service.postCoupon(data).subscribe({
        next: (data) => {
        },
        error: (err) => {
          this.errMessage = err;
        },
    });
  }
  errMessage: string = '';
}

