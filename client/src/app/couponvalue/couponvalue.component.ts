import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-couponvalue',
  templateUrl: './couponvalue.component.html',
  styleUrls: ['./couponvalue.component.css']
})
export class CouponvalueComponent {
  @Input() coupon_value: string = '';
  @Input() coupon_condition: string = '';
  @Input() image_url: string = 'assets/image_coupon/freeship.png';
}
