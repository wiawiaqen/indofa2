// import { HttpClient } from '@angular/common/http';
// import { Component, OnInit } from '@angular/core';
// import { Emitters } from '../emitters/emitter';

// @Component({
//   selector: 'app-home-page',
//   templateUrl: './home-page.component.html',
//   styleUrls: ['./home-page.component.css']
// })
// export class HomePageComponent implements OnInit {
// message:string
// constructor(private http:HttpClient){}
// ngOnInit():void{
//   this.http
//   .get('http://localhost:5000/api/user',{withCredentials: true})
//   .subscribe(
//     (res:any)=> {
//     this.message=`Hi ${res.name}`
//     Emitters.authEmitter.emit(true)
//   },
//   (err) => {
//     this.message=" You are not logged in"
//     Emitters.authEmitter.emit(false)
//   }
//   )
// }
// }
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
hatgiong_products: Product[] = [];
dungcu_products: Product[] = [];
dat_products: Product[] = [];

constructor(
  private http:HttpClient,
  private productService:ProductService
){}
ngOnInit():void{
  this.http
  .get('/api/auth/user',{withCredentials: true})
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

}

handle_hatgiong() {
}

handle_dat() {
}

// handle_bestseller() {
//   this.productService.getPagination(this.page, this.category).subscribe(
//     {
//       next: (data:any) => {
//         this.bestseller = []
//         data['data'].forEach((productdata: any) => {
//           let product = new Product(productdata);
//           this.bestseller.push(product);
//         })
//       }
//     }
//   )
// }
// @Input() products: { name:  string; price: string; image:string; }[] = [
//   {
//     name: "Hạt giống rau muống Indofa",
//     price: "10.000",
//     image: "test.png"
//   },
//   {
//     name: "Hạt giống hoa hướng dương Indofa",
//     price: "10.000",
//     image: "test.png"
//   },
//   {
//     name: "Hạt giống rau muống Indofa",
//     price: "10.000",
//     image: "test.png"
//   },
//   {
//     name: "Hạt giống hoa hướng dương Indofa",
//     price: "10.000",
//     image: "test.png"
//   },
//   {
//     name: "Hạt giống rau muống Indofa",
//     price: "10.000",
//     image: "test.png"
//   },
//   {
//     name: "Hạt giống hoa hướng dương Indofa",
//     price: "10.000",
//     image: "test.png"
//   },]

}
