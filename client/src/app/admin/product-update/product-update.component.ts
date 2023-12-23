import { Component, OnInit, inject } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrl: './product-update.component.css'
})
export class ProductUpdateComponent {

  errMessage: string = '';
  productid: string = '';
  product: Product = new Product();
  products: any;

  files: File[] = [];
  files1: File[] = [];
  imgbase64: string | ArrayBuffer | null = '';
  f_imgbase64: string | ArrayBuffer | null = '';

  constructor(
    private service: ProductService,
    private activateRoute: ActivatedRoute,
    private router: Router,
  ) {
    activateRoute.paramMap.subscribe((param) => {
      let id = param.get('id');
      if (id != null) {
        this.searchProduct(id);
      }
    });

  }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe({
      next: (params: ParamMap) => {
        this.searchProduct(String(params.get("id")))
      },
      error: (err) => {
        this.errMessage = err;
      }
    })
  }



  searchProduct(productId: string) {
    this.service.getAProduct(productId).subscribe({
      next: (data) => {
        this.product = new Product(data['data']);
        this.product.productPrice = this.product.getRawNumber(String(this.product.productPrice))
        this.product.productDiscountPrice = this.product.getRawNumber(String(this.product.productDiscountPrice))
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
  }
  putProduct() {

    this.service.putProduct(this.product).subscribe({
      next: (data) => { this.product = data },
      error: (err) => { this.errMessage = err }
    }),
      alert("Update successfully!")
    this.goBack()
  }
  goBack() {
    this.router.navigate(['admin-product-list']);
  }
  public setProduct(p: Product) {
    this.product = p; // Clone the object to avoid reference issues
  }
  onSelect(event: any) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }
  onSelect1(event: any) {
    console.log(event);
    this.files1.push(...event.addedFiles);
  }

  onRemove(event: any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
  onRemove1(event: any) {
    console.log(event);
    this.files1.splice(this.files.indexOf(event), 1);
  }
}

