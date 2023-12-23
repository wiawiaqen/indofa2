import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import { Product } from 'src/app/models';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  errMessage: string = '';

  constructor(public service: ProductService, public router: Router) {
    this.fetchProducts();
  }

  ngOnInit() {
    this.fetchProducts();
  }

  private fetchProducts() {
    this.service.getProducts().subscribe(
      (data:any) => {
        data['data'].forEach((product_data:any) => {
          let product = new Product(product_data);
          this.products.push(product);
        });
        console.log('Products Data:', this.products);
        // const parsedData = typeof data === 'string' ? JSON.parse(data) : data;

        // if (Array.isArray(parsedData.data)) {

        //   console.log('Products Data:', this.products);
        // } else {
        //   console.error('Error: Data is not an array', parsedData);
        // }
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
    this.router.navigate(['/', p._id]);
  }

  deleteProduct(_id: any) {
    Swal.fire({
      title: 'Tiếp tục xóa sản phẩm?',
      text: "Sản phẩm sẽ bị xóa vĩnh viễn.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Tiếp tục'
    }).then((result:any) => {
      if (result.isConfirmed) {
        this.service.deleteProduct(_id).subscribe({
          next: (data:any) => {
            this.products = data;
            Swal.fire({
              title: 'Đã xóa',
              text: 'Sản phẩm đã được xóa.',
              icon: 'success'
            });
          },
          error: (err:any) => {
            this.errMessage = err;
            // Show error message
            Swal.fire({
              title: 'Lỗi',
              text: 'Đã xảy ra lỗi khi xóa.',
              icon: 'error'
            });
          },
        });
      }
    });
  }
}