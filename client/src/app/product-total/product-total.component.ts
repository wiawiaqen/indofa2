import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models';
import { ProductService } from '../services/product.service';
import { MapType } from '@angular/compiler';

@Component({
  selector: 'app-product-total',
  templateUrl: './product-total.component.html',
  styleUrls: ['./product-total.component.css']
})
export class ProductTotalComponent {
  @Input() product: Product = new Product();
  products: Product[] = [];
  input: string = '';
  category: string = '';
  page: string = '';
  mapping: {[key:string]: string} = {
    "cuqua": "Hạt giống củ quả",
    "hoa": "Hạt giống hoa",
    "rau": "Hạt giống rau",
    "dungcu": "Dụng cụ trồng cây",
    "dat": "Đất/Giá thể",
    "chaucustom": "Trang trí chậu cây",
    "gom": "Chậu gốm",
    "treo": "Chậu treo",
    "nhua": "Chậu nhựa",
  }
  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) { }
  ngOnInit(): void {
    
    this.activatedRoute.params.subscribe((val) => {
      this.input = val['category'];
      let data = this.input.split("-")
      this.category = data[0];
      try{
      this.page = data[1];}
      catch(e){
        this.page = "1"
      }
    });
    
    this.productService.getPagination(this.page, this.category).subscribe(
      {
        next: (res: any) => {
          console.log(res['data'])
          res['data'].forEach(
            (product_data: any) => {
              let product = new Product(product_data)
              this.products.push(product)
            }
          )
          console.log(this.products)
        },
        error: (err: any) => {
          console.log(err);
        }
      }
    );
  }

}
