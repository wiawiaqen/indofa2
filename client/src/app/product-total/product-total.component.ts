import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models';
import { ProductService } from '../services/product.service';

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
  loading: boolean = true;
  sortKey: string ='null';
  maxpage: number = 2;
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

    this.activatedRoute.params.subscribe((val:any) => {
      this.input = val['category'];
      let data = this.input.split("-")
      console.log(data)
      this.category = data[0];
      try{
      this.page = data[1];}
      catch(e){
        this.page = "1"
      }
    });
    this.productService.getPagination(this.page, this.category, this.sortKey).subscribe(
      {
        next: (res: any) => {
          this.products = []
          this.loading = true;
          res['data'].forEach(
            (product_data: any) => {
              let product = new Product(product_data)
              this.products.push(product)
            }
          )
          this.loading = false;
        },
        error: (err: any) => {
          console.log(err);
        }
      }
    );
  }
  sort() {
    this.loadData();
  }

  private loadData() {
    this.productService.getPagination(this.page, this.category, this.sortKey).subscribe(
      {
        next: (res: any) => {
          this.products = res['data'].map((product_data: any) => new Product(product_data));
          console.log(this.products);
        },
        error: (err: any) => {
          console.log(err);
        }
      }
    );
}
}
