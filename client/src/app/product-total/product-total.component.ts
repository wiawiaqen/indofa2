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
  page: number = 1;
  sortKey: string = 'null';
  maxpage: number = 2;
  loading: boolean = true;
  mapping: { [key: string]: string } = {
    "cuqua": "Hạt giống củ quả",
    "hoa": "Hạt giống hoa",
    "rau": "Hạt giống rau",
    "dungcu": "Dụng cụ trồng cây",
    "dat": "Đất/Giá thể",
    "chaucustom": "Trang trí chậu cây",
    "gom": "Chậu gốm",
    "treo": "Chậu treo",
    "nhua": "Chậu nhựa",
    "gom,nhua,treo,chaucustom,dungcu": "Dụng cụ",
    "rau,hoa,cuqua": "Hạt giống"
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
      console.log(data)
      this.category = data[0];
      try {
        this.page = Number(data[1]);
      }
      catch (e) {
        this.page = 1
      }
    });
    this.products = []
    this.loadData()
  }
  getMaxPage() {
    this.productService.getMaxPage(this.category)
  }
  setPage(page: number | String) {
    this.page = Number(page) + 1
    this.loadData()
  }
  sort() {
    this.loadData();
  }

  loadData() {
    this.products = []
    this.loading = true
    this.productService.getPagination(String(this.page), this.category, this.sortKey).subscribe(
      {
        next: (res: any) => {
          this.products = res['data'].map((product_data: any) => new Product(product_data));
          this.loading = false
        },
        error: (err: any) => {
          console.log(err);
        }
      }
    );
  }
}
