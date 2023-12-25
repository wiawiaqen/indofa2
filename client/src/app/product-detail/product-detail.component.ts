import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Product, Cart } from '../models';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input() product: Product;
  quantity: number = 1;
  cart: Cart = new Cart();
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
    private router: Router,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.getUserCart();
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
  getUserCart() {
    this.cartService.getUserCart().subscribe(data => {
      this.cart = new Cart(data['data']);
    });
  }

  increaseQuantity() {
    this.quantity += 1;
  }
  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity -= 1;
    }
  }
  goToPayment() {
    this.addToCart();
    this.router.navigate(['/payment']);
  }
  goToProductTotal() {
    this.addToCart();
    this.router.navigate([`/prodtotal/${this.category}`]);
  }
  addToCart(){
    let extractedProducts = this.cart.products.map((product: any) => {
      return {
        product: product.productID,
        quantity: product.quantity
      }
    });
    let isExist = false;
    extractedProducts.forEach((product: any) => {
      if (product.product === this.product.productID) {
        isExist = true;
        product.quantity += this.quantity;
      }
    });
    if (!isExist) {
      extractedProducts.push({
        product: this.product.productID,
        quantity: this.quantity
      });
    }
    let data = {
      cartID: this.cart.cartID,
      products: extractedProducts
    }
    this.cartService.updateCart(this.cart.cartID, data).subscribe(data => {
      console.log(data);
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

