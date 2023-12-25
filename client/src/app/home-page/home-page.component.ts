
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input} from '@angular/core';
import { Emitters } from '../emitters/emitter';
import { Product } from '../models';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
message:string

bestseller: Product[] = [];
bestseller_loading = true;
hatgiong_products: Product[] = [];
hatgiong_loading = true;
dungcu_products: Product[] = [];
dungcu_loading = true;
dat_products: Product[] = [];
dat_loading = true

constructor(
  private http:HttpClient,
  private productService:ProductService
){}
ngOnInit():void{
  this.handle_bestseller()
  this.handle_hatgiong()
  this.handle_dungcu()
  this.handle_dat()
  this.http
  .get('http://localhost:5000/api/user',{withCredentials: true})
  .subscribe(
    (res:any)=> {
    this.message=`Hi ${res.name}`
    Emitters.authEmitter.emit(true)
  },
  (err) => {
    this.message=" You are not logged in"
    Emitters.authEmitter.emit(false)
  }
  )
}

handle_dungcu() {
  this.productService.getPagination("1", "gom,nhua,treo,dungcu").subscribe(
    {
      next: (data:any) => {
        this.dungcu_products = []
        this.dungcu_loading = true;
        console.log(this.dungcu_products)
        data['data'].forEach((productdata: any) => {
          let product = new Product(productdata);
          this.dungcu_products.push(product);
        })
        this.dungcu_loading = false;
      }
    }
  )
}

handle_hatgiong() {
  this.productService.getPagination("1", "rau,hoa,cuqua").subscribe(
        {
          next: (data:any) => {
            this.hatgiong_products = []
            this.hatgiong_loading = true;
            console.log(this.hatgiong_products)
            data['data'].forEach((productdata: any) => {
              let product = new Product(productdata);
              this.hatgiong_products.push(product);
            })
            this.hatgiong_loading = false;
          }
        }
      )
}

handle_dat() {
  this.productService.getPagination("1", "dat").subscribe(
    {
      next: (data:any) => {
        this.dat_products = []
        this.dat_loading = true;
        console.log(this.dat_products)
        data['data'].forEach((productdata: any) => {
          let product = new Product(productdata);
          this.dat_products.push(product);
        })
        this.dat_loading = false;
      }
    }
  )
}

handle_bestseller() {
  this.productService.getPagination("1", "dat").subscribe(
    {
      next: (data:any) => {
        this.bestseller = []
        this.bestseller_loading = true;
        console.log(this.dat_products)
        data['data'].forEach((productdata: any) => {
          let product = new Product(productdata);
          this.bestseller.push(product);
        })
        this.bestseller_loading = false;
      }
    }
  )
}
}
