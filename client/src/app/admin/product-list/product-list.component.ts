import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import { Product } from 'src/app/models';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  errMessage: string = '';
  
  constructor(public service: ProductService, public router: Router) {
    this.fetchProducts();
    this.service.getProducts().subscribe({
      next: (data) => {
        // Lấy danh sách các Medicines
        this.products = data;
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
  }
  
  ngOnInit() {
    this.fetchProducts();
  }
  
  private fetchProducts() {
    this.service.getProducts().subscribe(
      (data) => {
        // Assuming your data has a 'data' property containing the products array
        const parsedData = typeof data === 'string' ? JSON.parse(data) : data;
  
        if (Array.isArray(parsedData.data)) {
          this.products = parsedData.data;
          console.log('Products Data:', this.products);
        } else {
          console.error('Error: Data is not an array', parsedData);
        }
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
   
  }
  DetailProduct(p: any) {
    this.router.navigate(['/', p._id]);
  }
  
  createProduct() {
    this.router.navigate(['admin-product-add']);
  }
  
  updateProduct(p: any) {
    this.router.navigate(['admin-product-update', p._id]);
  }
  
  deleteProduct(_id: any) {
    if (window.confirm('confirm to delete?')){
      this.service.deleteProduct(_id).subscribe({
        next:(data)=>{this.products=data},
        error:(err)=>{this.errMessage=err}
      })
      location.reload()
    }
  
  }}
