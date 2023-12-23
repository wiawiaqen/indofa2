import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input() product: Product = new Product();
  products: Product[] = [];
  
  id: any;
  category: string = '';
  showmore: boolean = false;
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
  };

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.category = params['category'];
      this.id = params['id'];

      if (this.id == null || this.id == undefined || this.id == '') {
        this.router.navigate(['/']);
      } else {
        this.getProductDetails(this.id);
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
  // showmoredetail() {
  //   this.showmore = true;
  // }
  getProductDetails(id: string): void {
    this.productService.getProduct(id).subscribe(
      {
        next: (productDetails: any) => {
          this.product = new Product(productDetails.data);
          console.log("data", this.product.processDetail())
        },
        error: (err) => {
            console.log(err);
            this.router.navigate(['/']);
        }
      }
    );
  }
}
