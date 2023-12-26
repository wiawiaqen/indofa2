import { Component, OnInit } from '@angular/core';
import { CouponService } from '../services/coupon.service';
import { Router } from '@angular/router';
import { Coupon } from '../models';
import { SearchbarService } from '../services/searchbar.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.css']
})
export class CouponComponent implements OnInit {
  coupons: Coupon[] = [];
  errMessage: string = '';

  constructor(public couponService: CouponService, public router: Router, private search: SearchbarService) {}

  ngOnInit() {
    this.fetchCoupons();
    this.search.searchCoupons('').subscribe(
      (data:any) => {
        this.coupons = [];
        data.forEach((coupon_data:any) => {
          let coupon = new Coupon(coupon_data);
          this.coupons.push(coupon);
        });
      },
      (error:any) => {
        console.error('Error:', error);
      }
    );
  }

  private fetchCoupons() {
    this.couponService.getCoupons().subscribe(
      (data:any) => {
        this.coupons = [];
        data['data'].forEach((coupon_data:any) => {
          let coupon = new Coupon(coupon_data);
          this.coupons.push(coupon);
        });
        console.log('Products Data:', this.coupons);
      },
      (error:any) => {
        console.error('Error fetching coupons:', error);
      }
    );
  }

  createCoupon() {
    this.router.navigate(['admin-new-coupon']);
  }

  input: string = ''
  hasQuery: boolean = false;

  deleteCoupon(_id: any) {
    Swal.fire({
      title: 'Tiếp tục xóa sản phẩm?',
      text: "Sản phẩm sẽ bị xóa vĩnh viễn.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Tiếp tục'
    }).then((result) => {
      if (result.isConfirmed) {
        this.couponService.deleteCoupon(_id).subscribe({
          next: (data:any) => {
            this.coupons = data;
            Swal.fire({
              title: 'Đã xóa',
              text: 'Sản phẩm đã được xóa.',
              icon: 'success'
            });
          },
          error: (err:any) => {
            this.errMessage = err;
            // Show error message
            Swal.fire({
              title: 'Lỗi',
              text: 'Đã xảy ra lỗi khi xóa.',
              icon: 'error'
            });
          },
        });
      }
    });
  }

  sendData(event: any) {

    let query: string = event.target.value;
    let matchSpaces: any = query.match(/\s*/);

    if (matchSpaces[0] === query) {

      this.hasQuery = false;
      return;
    }

    this.search.searchCoupons(query.trim()).subscribe(
      (results: Coupon[]) => {
        this.coupons = [];
        results.forEach((coupon) => {
          let couponObject = new Coupon(coupon);
          this.coupons.push(couponObject)
        })
        this.hasQuery = true;
        console.log('Data received from server:', results);
        console.log('Products:', this.coupons);
      },
      (error) => {
        console.error('Error from server:', error);
      }
    );
  }
}
