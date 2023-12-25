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
  @Input() product: Product;
  products: Product[] = [];
  relatedProducts: any[] = [];
  input: string = '';
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
        this.router.navigate(['/prodtotal/:page', this.category, this.id]);
      } else {
        this.getProductDetails(this.id);
        
      }
    });
    this.productService.getPagination("1", this.category).subscribe(
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
      });
    
  }
  
  getProductDetails(id: string): void {
    this.productService.getProduct(id).subscribe({
      next: (productDetails: any) => {
        this.product = new Product(productDetails.data);
        console.log("data", this.product.processDetail());
      },
      error: (err) => {
        console.log(err);
        this.router.navigate(['/',this.page]);
      }
    });
  }
}
  // getProductsByCategory(category: string, currentProductId: string): Observable<any> {
  //   return this.http.get('/api/products/?category=' + category + '&exclude=' + currentProductId, {
  //     withCredentials: true
  //   });
  // }    

  // getRelatedProducts(category: string, productId: string): void {

  //   this.productService.getProductsByCategory(category, productId).subscribe({
  //     next: (response: any) => {
  //       if (response && response.size && Array.isArray(response.data)) {
  //         this.relatedProducts = response.data;
  //       } else {
  //         // Xử lý nếu response không có cấu trúc mong đợi
  //         console.error('Invalid format for relatedProducts:', response);
  //       }
  //     },
  //     error: (err) => {
  //       console.log(err);
  //     }
  //   });
  // }
  
    
    
  // }

